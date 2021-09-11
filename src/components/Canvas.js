import React, {useState, useEffect} from 'react';

function Canvas(props) {
    const [context, setContext] = useState(null);
    const [loaded, setLoaded] = useState(false);

    // 第二引数[]の時，コンポーネントが表示される最初の一回だけ実行される
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const canvasContext = canvas.getContext('2d');
        setContext(canvasContext);
    }, []);

    // 状態にコンテキストが登録されたら実行される
    useEffect(() => {
        if (context !== null) {
            const img = document.createElement('img')
            img.src = props.fileUrl;
            img.onload = () => {
                //  画像読み込み完了後実行される
                context.drawImage(img, 0, 0);
                setLoaded(true);
            }
        }
    }, [context, props.fileUrl]);

    useEffect(() => {
        if (loaded) {

        }
    }, [loaded]);

    return (
        <canvas id="canvas" width="400" height="400"></canvas>
    );
}

export default Canvas;
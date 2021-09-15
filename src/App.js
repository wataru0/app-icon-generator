import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import DlLinks from './components/DlLinks'
import Footer from './components/Footer';
import Header from './components/Header';
import Image from './components/Image';

function Main() {
  const [fileUrl, setFileUrl] = useState(null);
  const [resizeData, setResizeData] = useState(null);
  const [flag, setFlag] = useState(false);

  // Javascriptで画像処理を行うためには，読み込んだ画像をCanvasに渡してやる必要がある
  const [canvas, setCanvas] = useState(null);
  const [context, setContext] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const previewImage = (event) => {
    const imageFile = event.target.files.item(0);
    const imageUrl = URL.createObjectURL(imageFile);
    setFileUrl(imageUrl);
    setFlag(false);
  }

  useEffect(() => {
    const cv = document.createElement('canvas');
    // cv.width = 1024;
    // cv.height = 1024;
    const ctx = cv.getContext('2d');
    setCanvas(cv);
    setContext(ctx);
  }, []);

  useEffect(() => {
    if (context !== null) {
      const img = document.createElement('img');
      img.src = fileUrl;
      img.onload = () => {
        // 読み込み完了時に走る
        // drawImageの第一引数はimageオブジェクト
        // context.drawImage(img, 0, 0);
        let dstWidth = 400;
        let dstHeight = 400;
        canvas.width = dstWidth;
        canvas.height = dstHeight;
        // context.drawImage(img, 0, 0, 1024, 1024, 0, 0, dstWidth, dstHeight);
        context.drawImage(img, 0, 0)
        setLoaded(true);
      }
    }
  }, [context, fileUrl, canvas]);

  // useEffect(() => {
  //   if (loaded) {
  //     console.log(canvas);
  //   }
  // }, [loaded, canvas]);

  const resizeImage = (canvas) => {
    if (loaded) {
      setResizeData(canvas.toDataURL('image/png'))
    }
    setFlag(true);
  }

  return (
    <div className="container">
      <br />
      <div className="columns is-centered">
        <div className="column">
          <form>
            <div className="file">
              <label className="file-label">
                <input id="inputImage" type="file" name="img"
                  accept="image/*" onChange={previewImage} className="file-input"
                ></input>
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">
                    Choose a file…
                  </span>
                </span>
                {/* <span class="file-name">
                  ...
                </span> */}
              </label>
            </div>
            <Image fileUrl={fileUrl} />
          </form>
        </div>
        <div className="column">
          <div className="field is-centered">
            <button
              className="button is-rounded is-primary is-fullwidth"
              id="generateButton"
              type="submit"
              onClick={() => { resizeImage(canvas) }}>
              {/* onClick={() => console.log(1)}> */}
              Generate
            </button>
          </div>
          <DlLinks data={resizeData} loaded={loaded} flag={flag} imageUrl={fileUrl}/>
        </div>
      </div>
      <br />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

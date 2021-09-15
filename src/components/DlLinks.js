import React, { useState, useEffect } from 'react';

function ResizeCanvas(imageUrl, width, height) {
    // canvas, contextを生成，drawImageして
    // canvas.toDataURL('image/png')
  
    return ;
  }
  
  function DlLinks(props) {
    const [boxValue, setBoxValue] = useState(['iOS']);
    const [context, setContext] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        
    }, []);
  
    useEffect(() => {
      console.log(boxValue);
  
    }, [boxValue]);
  
    const handleChange = (e) => {
      if (boxValue.includes(e.target.value)) {
        // すでに含まれていれば OFF したと判断し、
        // イベント発行元を除いた配列を set し直す
        setBoxValue(boxValue.filter(item => item !== e.target.value));
      } else {
        // そうでなければ ON と判断し、
        // イベント発行元を末尾に加えた配列を set し直す
        setBoxValue([...boxValue, e.target.value]);
      }
    }
    if (props.data === null || props.loaded === false || props.flag === false) {
      return <div />;
    }
    return (
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              value="iOS"
              onChange={handleChange}
              checked={boxValue.includes('iOS')} /> iOS and macOS
          </label>
          <div />
          <label>
            <input
              type="checkbox"
              value="Android"
              onChange={handleChange}
              checked={boxValue.includes('Android')} /> Android
          </label>
        </div>
        <a className="button is-fullwidth is-primary is-outlined" href={props.data} download="sample.png">Download</a>
      </div>
    );
  }

export default DlLinks;
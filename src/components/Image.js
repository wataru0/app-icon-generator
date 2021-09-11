import React from 'react';

function Image(props) {
    if (props.fileUrl === null) {
      return <div />;
    }
    return (
      <div>
        <figure className="image">
          <img
            id="preview"
            // src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" 
            // 親コンポーネントから渡されたプロパティはpropsを使ってアクセスできる！！
            src={props.fileUrl}
            alt=" " />
        </figure>
      </div>
    );
  }

  export default Image;
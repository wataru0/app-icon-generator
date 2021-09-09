import React from "react";
import "bulma/css/bulma.css";

function Header() {
  return (
    <header>
      <div className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">App Icon Generator</h1>
          </div>
        </div>

      </div>
    </header>
  );
}
function Image() {
  return (
    <div>
      <figure className="image is-square">
        <img
          id="preview"
          // src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg" 
          alt="" />
      </figure>
    </div>
  );
}

function Main() {
  return (
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column">
          <form>
            <div className="box">
              <div className="field">
                <input id="inputImage" type="file" name="img"
                  accept="image/*"></input>
              </div>
              <Image />
            </div>
          </form>
        </div>
        <div className="column">
          <div className="field is-centered">
            <button className="button is-rounded is-primary" id="generateButton" type="submit">generate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Made with love in Chiba, Japan</p>
      </div>
    </footer>
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

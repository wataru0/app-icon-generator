
function Header () {
  return (
    <header>
      <div>
        <h1>App Icon Generator</h1>
      </div>
    </header>
  );
}
function Main () {
  return (
    <form>
      <input id="inputImage" type="file" name="img"
       accept="image/*"></input>
       <button id="generateButton" type="submit">generate</button>
    </form>
  );
}
function Footer () {
  return (
    <footer>
      <p>Made with love in Chiba, Japan</p>
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

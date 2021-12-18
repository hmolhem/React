// import logo from './logo.svg';
import './App.css';
import Button from './../Button/Button';

function App() {
  return (
    <div className="App">
      {/*}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      <h1 class="heading">
        This is REACT sample
      </h1>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ab nesciunt vero repudiandae odio distinctio porro laboriosam modi? Voluptatem laudantium quam id architecto reiciendis, commodi necessitatibus temporibus soluta accusantium quidem!
      </p>
      <Button />

    </div>
  );
}

export default App;

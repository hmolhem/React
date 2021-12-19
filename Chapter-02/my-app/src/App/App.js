// import logo from './logo.svg';
import './App.css';
// import Button from './../Button/Button';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import PRODUCTS from './PRODUCTS.json';


function App() {
  // console.log(PRODUCTS);

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
      {/* <h1 class="heading">
        This is REACT sample
      </h1>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ab nesciunt vero repudiandae odio distinctio porro laboriosam modi? Voluptatem laudantium quam id architecto reiciendis, commodi necessitatibus temporibus soluta accusantium quidem!
      </p> */}
      {/* <Button /> */}
       <Header />
       <ul className="products">
          {PRODUCTS.map((item,pos) => (
            <li  key={item.id}>
              <h3>{item.name}</h3>
              <img src={item.image} />
              <span>Price: {item.price}</span>
              <button>Add to Cart</button>
            </li>
          ))}
       </ul>
       <Footer />
    </div>
  );
}

export default App;

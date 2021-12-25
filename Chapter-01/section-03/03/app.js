const Button = () => (<button>Click here </button>);

const App = (
    <div>
       <h1>This is React</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Obcaecati quo, necessitatibus rem fugiat provident laudantium 
          veniam dicta minima facilis magnam iusto amet nihil quae 
          debitis perspiciatis temporibus architecto laborum alias?
        </p>
        <Button />
    </div>
    );
ReactDOM.render(
    App,
    document.getElementById('app')
)      
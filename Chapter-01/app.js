// const customDiv = (<div>Hossein Molhem</div>);
// ReactDOM.render(
//     customDiv,
//      document.getElementById('app')
// )
// const App = (
//     <div>
//         <h1>Hossein Molhem</h1>
//         <p>
//         When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
//         </p>
//         <button type="submit" class="btn btn-primary">Submit</button>
//     </div>
// );
// ReactDOM.render(
//     App,
//      document.getElementById('app')
// )

const Button  = () => (<button type="submit" class="btn btn-primary">Submit</button>)
const App = (
    <div>
        <h1>Hossein Molhem</h1>
        <p>
        When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
        </p>
        <Button/>
    </div>
);
ReactDOM.render(
    App,
     document.getElementById('app')
)
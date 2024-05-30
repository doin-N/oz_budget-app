
import './App.css';



function App({ value, onIncrement, onDecrement }) {
  console.log(value);


  return (
    <div className="App">
      Clicked: {value} times
      {" "}
      <button onClick={onIncrement}>
        +
      </button>
      {" "}
      <button onClick={onDecrement}>
        -
      </button>

    </div>
  );
}

export default App;

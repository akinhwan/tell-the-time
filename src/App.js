import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tell the Time</h1>
        <button onClick={() => alert(new Date().toLocaleTimeString())}>
          Multiple Choice Mode? (4 options)
        </button>
        <button onClick={() => alert(new Date().toLocaleTimeString())}>
          Recall Mode
        </button>
      </header>
    </div>
  );
}

export default App;

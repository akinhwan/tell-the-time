import logo from './logo.svg';
import './App.css';

function App() {
  const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 12);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    return `${hours}:${minutes}:${seconds}`;
  };

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

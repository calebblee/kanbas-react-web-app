import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click link below to enter Kanbas!
        </p>
        <a
          className="App-link"
          href="/kanbas/home.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Kanbas
        </a>
      </header>
    </div>
  );
}

export default App;

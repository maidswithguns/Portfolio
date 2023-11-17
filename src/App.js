import './App.css';
import DateABulletBlock from './Block/Date a Bullet/Date a Bullet Block';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div>
      <header className="App-header">
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
      <DateABulletBlock />
    </div>
  );
}

export default App;

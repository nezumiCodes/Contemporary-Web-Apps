import logo from './logo.svg';
import './styles/App.css';
import Welcome from './components/Welcome';
import DaysCompleted from './components/DaysCompleted';
import Tile from './components/Tile';

function App() {
  return (
    <div className="App">
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

        <Welcome name={'Celia'}/>
        <Tile><DaysCompleted days={5}/></Tile>
        <DaysCompleted/> {/*without passing props, required but default set to 0*/}

      </header>
    </div>
  );
}

export default App;

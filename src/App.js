import logo from './logo.svg';
import logoINFO from './logoINFO.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoINFO} className="infoLogo" alt="xlogo" />
        <img src={logo} className="reactLogo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

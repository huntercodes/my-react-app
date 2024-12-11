import logo from './logo.svg';
import logoINFO from './logoINFO.png';
import './App.css';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Hobbies from './Hobbies';

function App() {
  return (
    <div className="App">
      <div>
        <PersonalInfo />
        <Education />
        <Hobbies />
      </div>
      <header className="App-header">
        <img src={logoINFO} className="infoLogo" alt="xlogo" />
        <img src={logo} className="reactLogo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

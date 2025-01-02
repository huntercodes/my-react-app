import logo from './logo.svg';
import logoINFO from './logoINFO.png';
import genericPhoto from './genericPhoto.jpg';
import './App.css';
import React from 'react';
import Goals from './Goals';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Hobbies from './Hobbies';

function App() {
  return (
    <div className="App">
      <div>
        <PersonalInfo
          headerTitle="Personal Information"
          name="Hunter Downey"
          photo={{ me: genericPhoto, width: '150px'}}
          description="I love my family, my dog, and my friends."
        />
        <Education
          headerTitle="Education"
          description="I am currently pursuing a degree in Web and Mobile Application Development at MCC."
        />
        <Hobbies
          headerTitle="Hobbies"
          description="I enjoy playing guitar, golfing, and video games. In the future, I would like to explore hiking and climbing."
        />
        <Goals
          headerTitle="Try Skydiving"
          description="I am setting a goal to go skydiving, as free fall is an experience I have always wanted to feel."
          suggestedEntry="Put a top goal here."
          buttonLabel="Add"
        />
      </div>
      <header className="App-header">
        <img src={logoINFO} className="infoLogo" alt="xlogo" />
        <img src={logo} className="reactLogo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

import React ,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import StarWarPeople from './components/Character';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [warCharName, setWarCharName] = useState([]);
  const [warCharHome, setWarCharHome] = useState([]);
  const [warCharBirth, setWarCharBirth] = useState([]);
  const [warCharGender, setWarCharGender] = useState([]);
  const [warCharHair, setWarCharHair] = useState([]);
  const [warCharEye, setWarCharEye] = useState([]);
  const [warCharSkin, setWarCharSkin] = useState([]);
  const [warCharHeight, setWarCharHeight] = useState([]);
  const [warCharMass, setWarCharMass] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect (() =>{
    axios.get(`https://swapi.dev/api/people`)
    .then(
      res => {
        console.log(res);
        setWarCharName(res.data.name);
        setWarCharHome(res.data.homeworld);
        setWarCharBirth(res.data.birth_year);
        setWarCharGender(res.data.gender);
        setWarCharHair(res.data.hair_color);
        setWarCharEye(res.data.eye_color);
        setWarCharSkin(res.data.skin_color);
        setWarCharHeight(res.data.height);
        setWarCharMass(res.data.mass);
      })
    .catch( err => {
      console.log('Could not fetch war people', err);
    });
    
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Div>
        <StarWarPeople warCharName={warCharName} warCharHome={warCharHome} warCharBirth={warCharBirth} warCharGender={warCharGender} warCharHair={warCharHair} warCharEye={warCharEye} warCharSkin ={warCharSkin} warCharHeight={warCharHeight} warCharMass={warCharMass}/>
        
      </Div>
    </div>
  );
}

export default App;

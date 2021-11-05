import React ,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import StarWarPeople from './components/Character';

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding:12%;
  `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [warCharacters, setWarCharacters] = useState([]);
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect (() =>{
    axios.get('https://swapi.dev/api/people')
    .then(
      res => {
        const warData = res.data
        console.log(warData);
       setWarCharacters(warData);
        
      })
    .catch( err => {
      console.log('Could not fetch war people', err);
    });
    
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Star War Characters</h1>
      <Div>
        {
        warCharacters.map(warCharacter => {
          return (
            <StarWarPeople key = {warCharacter.id} name ={warCharacter.name} homeworld ={warCharacter.homeworld} gender = {warCharacter.gender} birth_year ={warCharacter.birth_year} eye_color ={warCharacter.eye_color} skin_color = {warCharacter.skin_color} hair_color ={warCharacter.hair_color} />
          );
        })}
      </Div>
    </div>
  );
}

export default App;

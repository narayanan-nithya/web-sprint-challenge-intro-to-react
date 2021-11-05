import React ,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [warCharacters, setWarCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect (() =>{
    axios.get(`https://swapi.dev/api/people`)
    .then(
      res => {
        const warPeople = res.data.results;
        console.log(warPeople);
        setWarCharacters(warPeople);
      })
    .catch( err => {
      console.log('Could not fetch war people', err);
    });
    
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;

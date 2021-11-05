import React ,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import StarWarPeople from './components/Character';

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding:12%;
  margin-top: 0px;
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
      <p1>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p1>
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

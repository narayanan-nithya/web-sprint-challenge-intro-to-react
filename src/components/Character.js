// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 3px solid brown;
    border-radius: 7px;
    padding: 12px;
    `;


const StyledH2 = styled.h2`
    font-family: Helvetica;
    font-size: 18px;
`;


const StarWarPeople = props =>{
    return(
        <StyledList>
            <StyledH2>{props.name}</StyledH2>
            <p>Home : {props.homeworld}</p>
            <p>Gender: {props.gender}</p>
            <p>Born : {props.birth_year}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Hair Color: {props.hair_color}</p>
        </StyledList>
    );
};
export default StarWarPeople;


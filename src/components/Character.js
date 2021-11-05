// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledList = styled.li`
    display: flex;
    flex-direction: column;
    margin: auto;
    border: 7px ridge beige;
    border-radius: 7px;
    padding: 18px;
    `;


const StyledH2 = styled.h2`
    font-family: Helvetica;
    font-size: 18px;
`;

const StyledData = styled.h3`
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
`;
const StarWarPeople = props =>{
    return(
        <StyledList>
            <StyledH2>Name: {props.name}</StyledH2>
            <StyledData>{props.id}</StyledData>
            <StyledData>Home : </StyledData><p> {props.homeworld}</p>
            <StyledData>Gender: {props.gender}</StyledData>
            <StyledData>Born : {props.birth_year}</StyledData>
            <StyledData>Eye Color: {props.eye_color}</StyledData>
            <StyledData>Skin Color: {props.skin_color}</StyledData>
            <StyledData>Hair Color: {props.hair_color}</StyledData>
        </StyledList>
    );
};
export default StarWarPeople;


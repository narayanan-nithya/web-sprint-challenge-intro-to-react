// Write your Character component here
import React from 'react';
import styled from 'styled-components';

//Creating styled list section.
const StyledList = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: auto;
    border: 7px outset bisque;
    border-radius: 7px;
    padding: 12px;
    `;

//Styled Heading
const StyledH2 = styled.h2`
    font-family: Helvetica;
    font-size: 21px;
    color: #443e3e;
`;

//Styled H3
const StyledData = styled.h3`
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    color: cornsilk;
`;

//Creating props to send data to parent component. 
const StarWarPeople = props =>{
    return(
        <StyledList>
            <StyledH2>{props.name}</StyledH2>
            <StyledData>{props.id}</StyledData>
            <StyledData>Home : </StyledData><p> {props.homeworld}</p>
            <StyledData>Gender:</StyledData> <p>{props.gender}</p>
            <StyledData>Born : </StyledData> <p>{props.birth_year}</p>
            <StyledData>Eye Color:</StyledData> <p>{props.eye_color}</p>
            <StyledData>Skin Color:</StyledData> <p>{props.skin_color}</p>
            <StyledData>Hair Color: </StyledData> <p>{props.hair_color}</p>
        </StyledList>
    );
};
export default StarWarPeople; //exporting Child Component


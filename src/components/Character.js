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
const StyledHeading = styled.h1`
    font-family: Arial, Helvetica, sans-serif ;
    font-size: 27px;
    color: brown;
`;

const StyledH2 = styled.h2`
    font-family: Helvetica;
    font-size: 18px;
`;


export default function (props) {
    const StarWarInfo = props;
    return (
        <StyledList>
            <StyledH2>{props.name}</StyledH2>
            <p>{props.homeworld}</p>
            <p>{props.birth_year}</p>
            <p>{props.gender}</p>
            <p>{props.hair_color}</p>
            <p>{props.eye_color}</p>
            <p>{props.skin_color}</p>
            <p>{props.height}</p>
            <p>{props.mass}</p>

        </StyledList>
    );
};


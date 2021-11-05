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


export default function StarWarPeople(props) {
    console.log(props);
    const {warCharName, warCharHome, warCharBirth, warCharGender, warCharHair, warCharEye, warCharSkin, warCharHeight, warCharMass } = props
    return (
        <StyledList>
            <StyledH2>{warCharName}</StyledH2>
            <p>{warCharHome}</p>
            <p>{warCharBirth}</p>
            <p>{warCharGender}</p>
            <p>{warCharHair}</p>
            <p>{warCharEye}</p>
            <p>{warCharSkin}</p>
            <p>{warCharHeight}</p>
            <p>{warCharMass}</p>

        </StyledList>
    );
};


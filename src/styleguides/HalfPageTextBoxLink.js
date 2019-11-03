import React from 'react';
import styled from 'styled-components';
import { StyledLink }  from '../utils/RouteLink';

const HalfPageTextBox = styled.div`
font-size: 60px;
width: 68%;
height: 20%;
background-color: blue;
// background-color: ${props => props.background};
display: flex;
justify-content: center;
background-image: linear-gradient(white,#73abff,#000000d1);
align-items: center;
border-radius: 20px;

&:hover{
    transition: all 0.4s ease-in-out;
    // background-image: linear-gradient(#000000d1,#73abff,white);
    width: 100%;
}
`;

export default function styledLink(props){
    return(

    <HalfPageTextBox 
    background={props.background}
    >
    <StyledLink to={props.src}> {props.children}</StyledLink>
    </HalfPageTextBox>
    )
 }
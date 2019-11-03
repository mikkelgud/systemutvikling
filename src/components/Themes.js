import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HalfPageTextBox from '../styleguides/HalfPageTextBoxLink';


const LocalWrapper = styled.div`
display: flex;
flex-wrap: wrap;
width: 100vw;
height: 60vw;
justify-content: center;

`;

export default function (props) {
    const [burgerOpenState, setBurgerOpenState] = useState(false);
    
    const getRandomRoute = () =>{
        return "valg/obligger";
    }


    return (
        <LocalWrapper>
            {burgerOpenState ? 
               <> 
             <HalfPageTextBox background={"#20ccff"} src="/valg/obligger"> Obligger</HalfPageTextBox>
                <HalfPageTextBox background={"orange"} src="/valg/obligger">Generelle temaer</HalfPageTextBox>
                <HalfPageTextBox background={"purple"} onClick={() => props.history.push("/valg/obligger")}> Examensoppgaver </HalfPageTextBox>
                <HalfPageTextBox onClick={() => props.history.push(getRandomRoute())}>I feel lucky</HalfPageTextBox>
           </>
           : <FontAwesomeIcon onClick={setBurgerOpenState(true)} icon="dungeon" />}      
        </LocalWrapper>
    );
}
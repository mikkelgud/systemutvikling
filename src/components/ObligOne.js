import React from 'react';
import styled from 'styled-components';
import TextBox from '../styleguides/TextBox';

const LocalWrap = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 60vw;
`;
export default function(){
 return(
     <LocalWrap>
         <TextBox>

         </TextBox>

     </LocalWrap>
 );
}
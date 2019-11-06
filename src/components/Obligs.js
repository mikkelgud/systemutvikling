import React from 'react';
import styled from 'styled-components';
import HalfPageTextBox from '../styleguides/HalfPageTextBoxLink';

const LocalWrap = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 60vw;
`;
export default function(){
 return(
     <LocalWrap>
<HalfPageTextBox src="/valg/obligger/oblig-en">
Oblig 1
</HalfPageTextBox>   
<HalfPageTextBox src="/valg/obligger/oblig-to">
Oblig 2
</HalfPageTextBox>   
<HalfPageTextBox src="/valg/obligger/oblig-tre">
Oblig 3
</HalfPageTextBox>       
     </LocalWrap>
 );
}
import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  hare from '../assets/harestuaSkole.jpeg';

const NavBarWrapper = styled.div`
width 100vw;
background-color: #ffffff;
`;

const Link = styled.a`
decoration: none;
font-size: 10rem;
cursor: pointer;
`;

const LocalStyledHeader = styled.header`
font-size: 2rem;
margin: 2rem 0;
`;

const LocalStyledImage = styled.img`
border: 1px solid #ddd;
border-radius: 10px;
width: 25%;
`

export default function(props){
    const [hoverState, setHoverState] = useState(false);
    const [bookState, setBookState] = useState("book");



    const bookItemOnHoverEffectToggle = () => {
        setHoverState(!hoverState);
        // setHoverState(!hoverState);
        hoverState ? setBookState("book"):setBookState("book-reader");
    }
    return( 
    <NavBarWrapper>
        <LocalStyledHeader> Velkommen til Systemutvikling</LocalStyledHeader>
        <Link onClick={()=> props.history.push("/valg")}><FontAwesomeIcon
         icon={bookState} 
         onMouseEnter={()=> bookItemOnHoverEffectToggle()}
         onMouseLeave={()=> bookItemOnHoverEffectToggle()}/>
         </Link>
         <p>
             <br/>
             Denne siden er laget av Mikkel Gudmundsen for
              å dele sine erfaringer <br/>og læringsmetoder 
              til andre som eventuelt skal ha faget en annen gang.
         </p>
         <LocalStyledImage src={hare}/>
    </NavBarWrapper>
    )
}
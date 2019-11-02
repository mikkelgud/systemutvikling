import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
width 100vw;
background-color: #ffffff;
`;

const Link = styled.a`
decoration: none;
`;

export default function(){
    return(
    <NavBarWrapper>
        <Link>Temaer</Link>
    </NavBarWrapper>
    )
}
import React from 'react'
import styled from 'styled-components';
import imagen from '../images//bmw.png'
const Header = () => {
   return(
     <Constainer>
     <a>
       <img src={imagen} alt=''/>
    </a> 
     </Constainer>
   )

}

export default Header;

const Constainer = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top:0;
    left:0
    right:0

`;

import Nav from './navBar'
import styled from 'styled-components'
import Link from 'next/link'

const Logoo = styled.h1`
       font-size:2rem;
       margin-left:2rem;
       position:relative;
       z-index:2;
       transform:skew(-7deg);
       a {
           text-decoration:none;
           padding:0.5rem 1rem;
           background: red;
           color:white;
           text-transform:uppercase;

       }
       @media (max-width:1300px){
           margin:0;
           text-align:center;
       }
`;

const StyledHeader = styled.header`
         .bar {
             border-bottom:10px solid black;
             display:grid;
             grid-template-columns:auto 1fr;
             justify-content:space-between;
             align-items:stretch;
             @media (max-width:1300px){
                 grid-template-columns:1fr;
                 justify-content:center;
             }
         }
`

const Header = ()=>{

    return (
        <StyledHeader>
        <div className="bar">
          <Logoo><Link href="/"><a>Todo</a></Link></Logoo>
           <Nav /> 
        
          </div>
          <div className="sub-bar">  
           
        </div>
        <div></div>
        </StyledHeader>
    )
}

export default Header
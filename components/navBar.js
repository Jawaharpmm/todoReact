import Link from 'next/link'
import styled from 'styled-components'
import NavStyles from './styles/navStyles'

const Stylethis = styled.a`
          text-decoration:none;
          color:black;
          font-weight:bold;
          font-family:sans-serif;
`

const Navbar = ()=>{
     
    return (
      <NavStyles>
          <Link href="/"><Stylethis>Home</Stylethis></Link>
          <Link href="/about"><Stylethis>About</Stylethis></Link>
      </NavStyles>
    )
}

export default Navbar
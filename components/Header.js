import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.nav`
    background: #2d3748;
    width: auto;
    height: 60px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    margin: 0px;
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-color: rgb(130, 141, 154, 0.5);
  a {
    margin-right: 1rem;
  }
`;

const Header = () => {

    return(
        <NavBar>
        <h3>Konan</h3>
        <div>
          {/* talvez botar os icones de redes sociais aqui*/}
          <Link href='/'>
            <a>About</a>
          </Link>
        </div>
        </NavBar>
    )
}

export default Header;
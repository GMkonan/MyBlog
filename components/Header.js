import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.nav`
    background: #828d9a;
    width: auto;
    height: 60px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    margin: 0px;
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
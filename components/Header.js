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

const TitleHeader = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  &:hover{
    cursor: pointer;
    text-decoration: none;
  }
  `;

const Header = () => {

    return(
        <NavBar>
          <Link href='/'>
            <TitleHeader><b>Konan</b></TitleHeader>
          </Link>
        <div>
          {/* talvez botar os icones de redes sociais aqui*/}
          <Link href='https://twitter.com/GuilhermeKonan'>
            <a>Twitter</a>
          </Link>
          <Link href='https://github.com/GMkonan'>
            <a>Github</a>
          </Link>
        </div>
        </NavBar>
    )
}

export default Header;
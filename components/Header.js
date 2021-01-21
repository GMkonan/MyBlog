import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.nav`
    background: #1A202C;
    width: 1000px;
    margin: 0 auto;
    height: 60px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-color: rgb(130, 141, 154, 0.5);
  a {
    margin-right: 1rem;
  }
  @media(max-width: 800px) {
    width: auto;
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
          <Link href='/' passHref={true}>
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
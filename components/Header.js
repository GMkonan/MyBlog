import Link from 'next/link';
import styled from 'styled-components';

const NavBar = styled.nav`
    background: #444;
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
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Header = () => {

    return(
        <NavBar>
        <h1>Next'Blog</h1>
        <div>
          <Link href='/'>
            <a>Blog</a>
          </Link>
          <Link href='/'>
            <a>About</a>
          </Link>
        </div>
        </NavBar>
    )
}

export default Header;
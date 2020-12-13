import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #302d2d;
    color: white;
    margin: 0px;
    };
  p{
      font-size: 1.1rem;
  }
  img{
      display: block;
      margin: 0 auto;
  }
  h1 {
      font-size: 2.5rem;
  }
  a { /* maybe change to have this set to just some a tags */
    text-decoration: none;
    font-size: 1.8rem;
    color: white;
  }
  a:hover {
      text-decoration: underline;
  }
  
`

const Layout = ({ children }) => {

    return (
        <div style={{margin: '0 auto', width: '800px'}}>
            <GlobalStyle />
            <main>
                <div>{children}</div>
            </main>
        </div>
    )
}

export default Layout;
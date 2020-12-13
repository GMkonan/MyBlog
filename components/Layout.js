import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: grey;
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
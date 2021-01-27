import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1A202C;
    color: #dfe9f2;
    margin: 0px;
    padding: 0px;
    font-family: sans-serif;
    font-weight: 500;
    };
  p{
      font-size: 1.1rem;
      line-height: 2.5rem;
  }
  img{
      display: block;
      margin: 0 auto;
      @media(max-width: 800px) {
        width: 100%;
      }
  }
  h1 {
      font-size: 2.5rem;
      color: white;
  }
  a { /* maybe change to have this set to just some a tags */
    text-decoration: none;
    color: white;
  }
  a:hover {
      text-decoration: underline;
      cursor: pointer;
  }
  
`

export default GlobalStyle;
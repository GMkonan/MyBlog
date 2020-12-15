import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #2d3748;
    color: white;
    margin: 0px;
    padding: 0px;
    font-family: Sans-serif;
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
    color: white;
  }
  a:hover {
      text-decoration: underline;
      cursor: pointer;
  }
  
`

export default GlobalStyle;
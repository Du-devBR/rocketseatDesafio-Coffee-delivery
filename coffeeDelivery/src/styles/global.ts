import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }


  body {
    max-width: 1440px;
    margin: 0 auto;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', cursive;
  }

`

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  *{
    box-sizing: border-box;
  }

  :root{
  }

  body{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: "NotoSansKR-Regular";
  }
  
  a{
    text-decoration: none;
    color: #000000;
  }
  
  button{
    cursor: pointer;
    border: none;
    padding: 0;
  }

  h1{
    font-size: 24px;
  }

  h2{
    font-size: 20px;
  }
`;

export default GlobalStyle;

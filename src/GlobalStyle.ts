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
`;

export default GlobalStyle;

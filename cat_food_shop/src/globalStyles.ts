import { createGlobalStyle } from 'styled-components/macro';
import background from './assets/background.png';

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: "Exo 2.0";
src: url("/fonts/Exo2.0-Thin.woff2") format("woff2");
}

@font-face {
font-family: "Trebuchet MS";
src: url("/fonts/TrebuchetMS.woff") format("woff");
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background});
  font-family: "Trebuchet MS";
}

`;

export default GlobalStyle;

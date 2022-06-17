import { createGlobalStyle } from 'styled-components/macro';
import background from './assets/background.png';

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: "Exo 2.0 Thin";
src:
local('Exo 2.0 Thin'),
 url("/fonts/Exo2.0-Thin.woff2") format("woff2"),
 url("/fonts/Exo2.0-Thin.otf") format("opentype");
}

@font-face {
font-family: "Trebuchet MS";
src: local("Trebuchet MS"), 
url("/fonts/TrebuchetMS.woff") format("woff");
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
}

body{

  font-family: "Trebuchet MS";
}

#root{
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${background});

  padding: 10px;
  width: 100%;
  min-height: 100vh;
}
`;

export default GlobalStyle;

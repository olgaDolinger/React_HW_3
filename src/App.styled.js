import styled, { createGlobalStyle } from "styled-components";
//import OpenSans from "./assets/OpenSans-Regular.ttf";

export const App = styled.div`
  body {
    height: 100%;
    overflow-y: hidden;
  }

  #root,
  #root > div[class^="css"] {
    height: 100%;
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
     background: #555555;
 }
`
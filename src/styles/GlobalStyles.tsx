import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyles = createGlobalStyle`
    * {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

html,
body {
  padding: 0;
  margin: 0;
background-color: ${colors.white.normal};
}


a {
  color: ${colors.gray.dark};
  text-decoration: none;
}

* {
  box-sizing: border-box;
}


    `;

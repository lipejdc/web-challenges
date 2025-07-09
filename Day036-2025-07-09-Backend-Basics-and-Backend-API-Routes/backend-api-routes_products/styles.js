import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    text-align: center;
  }

   ul {
    padding: 0;
    list-style-position: inside;
  }

  li {
    display: block;
    margin: 0 auto;
  }
`;

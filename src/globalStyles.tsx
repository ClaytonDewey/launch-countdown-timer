import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    /* Primary */
    --primary-gray: hsl(237, 18%, 59%);
    --primary-red: hsl(345, 95%, 68%);

    /* Neutral */
    --white: hsl(0, 0%, 100%);
    --dark-blue: hsl(236, 21%, 26%);
    --very-dark-blue: hsl(235, 16%, 14%);
    --extra-dark-blue: hsl(234, 17%, 12%);
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0px auto;
    width: 100%;
    background: var(--very-dark-blue);
    color: var(--white);
    box-sizing: border-box;
  }

  html {
    // This defines what 1rem is.
    font-size: 62.5%; // 1rem = 10px;
    font-style: normal;
    font-weight: normal;
  }

  body {
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    font-family: 'Red Hat Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 1.6rem;
    background: url(./images/pattern-hills.svg) bottom center repeat-x, url(./images/bg-stars.svg) top center;
  }
`;

export default GlobalStyle;

// src/globalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --color-primary: black;
    --color-secondary: #0070f3;
    --color-background: #fff;
    --color-white: #fff;
    --color-black: #000;
    --color-text: #333;
    --color-company-background: #505275;
    --color-company-active-border: #333;
    --color-company-active-background: #fff;
    --color-counter-background: #3F404B;

    /* Font sizes */
    --font-size-title: 1.5rem;
    --font-size-paragraph: 1rem;

    /* Spacing */
    --spacing-padding: 20px;
    --spacing-margin: 20px;
    --spacing-small: 10px;
    --spacing-tiny: 5px;
    --spacing-huge: 50px;

    /* Sizes */
    --size-large: 15px;
    --size-huge: 50px;

    /* Widths */
    --width-full: 100%;
    --width-max: 1024px;

    /* Icon */
    --icon-large: 180px;

    /* Other */
    --border-radius: 0.25rem;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    color: var(--color-text);
    background: var(--color-background);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default GlobalStyle;
// src/globalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-background: ${({ theme }) => theme.colors.background};
    --color-text: ${({ theme }) => theme.colors.text};
    --color-company-background: ${({ theme }) => theme.colors.companyBackground};
    --color-company-active-border: ${({ theme }) => theme.colors.companyActiveBorder};
    --color-company-active-background: ${({ theme }) => theme.colors.companyActiveBackground};
    --color-counter-background: ${({ theme }) => theme.colors.counterBackground};
    
    --font-size-title: ${({ theme }) => theme.fontSizes.title};
    --font-size-paragraph: ${({ theme }) => theme.fontSizes.paragraph};
    
    --spacing-padding: ${({ theme }) => theme.spacing.padding};
    --spacing-margin: ${({ theme }) => theme.spacing.margin};
    --spacing-small: ${({ theme }) => theme.spacing.small};
    --spacing-tiny: ${({ theme }) => theme.spacing.tiny};
    --spacing-huge: ${({ theme }) => theme.spacing.huge};
    
    --size-large: ${({ theme }) => theme.sizes.large};
    --size-huge: ${({ theme }) => theme.sizes.huge};
    
    --width-full: ${({ theme }) => theme.widths.full};
    --width-max: ${({ theme }) => theme.widths.max};
    
    --icon-large: ${({ theme }) => theme.icon.large};
    
    --border-radius: ${({ theme }) => theme.borderRadius};
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

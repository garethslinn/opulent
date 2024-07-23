"use client"

import React from 'react';
import Header from './components/header/Header';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  /* Global styles */
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;

const _app: React.FC = ({ children }) => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </ThemeProvider>
  );
};

export default _app;

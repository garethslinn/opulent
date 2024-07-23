"use client"

// src/app/layout.tsx
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from './components/header/Header';
import '../../src/app/globals.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }
`;

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}

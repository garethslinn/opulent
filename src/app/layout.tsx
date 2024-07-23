"use client"

import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from './components/header/Header';
import '../../src/app/globals.css';
import Footer from "@/app/components/footer/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
        <body>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
        // <ThemeProvider theme={theme}>
        //     <GlobalStyle />
        //     <Header />
        //     {children}
        // </ThemeProvider>
    );
}

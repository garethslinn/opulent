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
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
    background-color: "#f1f1f1";
    color: ${theme.colors.text};
  }
  main {
    padding: 0 50px;
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
    );
}

"use client";

import React, { useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from './components/header/Header';
import Footer from "@/app/components/footer/Footer";
import '../../src/app/globals.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
    background-color: #f1f1f1;
    color: ${theme.colors.text};
  }
  main {
    padding: 0 50px;
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>GDS Consulting Ltd</title>
        </head>
        <body>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <main>
                {isClient ? children : null}
            </main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}

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

    // Dark mode
    //filter: invert(100%); 
    
    @media (max-width: 640px) {
      padding: 0 10px;
    }
    
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
            <link rel="icon" href="/icon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
            <title>GDS Consulting Ltd</title>
        </head>
        <body>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <main id="main">
                {isClient ? children : null}
            </main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}

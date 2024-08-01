"use client";

import React from "react";
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as ContextThemeProvider, useTheme } from "@/app/context/ThemeContext";
import Header from "./components/header/Header";
import Footer from "@/app/components/footer/Footer";
import "../../src/app/globals.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.containerBackground};
    color: ${({ theme }) => theme.colors.text};
  }

  main {
    padding: 0 50px;

    @media (max-width: 640px) {
      padding: 0 10px;
    }
  }
  
  .accessible {
    position: absolute;
    top: -3000px;
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <ContextThemeProvider>
            <Content>{children}</Content>
        </ContextThemeProvider>
        </body>
        </html>
    );
}

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { currentTheme, toggleTheme } = useTheme();

    return (
        <StyledThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} currentTheme={currentTheme} />
            <main id="main">{children}</main>
            <Footer />
        </StyledThemeProvider>
    );
};

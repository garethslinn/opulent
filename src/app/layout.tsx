"use client";

import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/theme";
import Header from "./components/header/Header";
import Footer from "@/app/components/footer/Footer";
import "../../src/app/globals.css";
import styled from "styled-components";

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
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(lightTheme); // Initial default theme

    useEffect(() => {
        // Ensure we are in a client-side environment
        if (typeof window !== "undefined") {
            // Retrieve the theme from local storage
            const savedTheme = localStorage.getItem("theme");

            // Debugging log to see what we get from local storage
            console.log(`Retrieved theme from localStorage: ${savedTheme}`);

            // Set the theme based on local storage, defaulting to lightTheme if none is set
            if (savedTheme) {
                setCurrentTheme(savedTheme === "dark" ? darkTheme : lightTheme);
            } else {
                setCurrentTheme(lightTheme); // Default to lightTheme if no theme is saved
            }
        }

        setIsClient(true); // Ensure client-side rendering
    }, []); // Empty dependency array ensures this runs only once on mount

    const toggleTheme = () => {
        // Toggle between light and dark themes
        const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
        setCurrentTheme(newTheme);

        // Store the new theme in local storage
        if (typeof window !== "undefined") {
            const newThemeName = newTheme === lightTheme ? "light" : "dark";
            localStorage.setItem("theme", newThemeName);

            // Debugging log to confirm the new theme is saved
            console.log(`Theme set to: ${newThemeName}`);
        }
    };

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
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Header toggleTheme={toggleTheme} /> {/* Pass the toggleTheme function */}
            <main id="main">{isClient ? children : null}</main>
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    );
}

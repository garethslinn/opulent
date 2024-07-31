"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme } from "@/theme";

interface ThemeContextProps {
    currentTheme: any;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setCurrentTheme(savedTheme === "dark" ? darkTheme : lightTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
        setCurrentTheme(newTheme);
        localStorage.setItem("theme", newTheme === lightTheme ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

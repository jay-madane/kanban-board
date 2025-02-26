import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as FluentThemeProvider } from '@fluentui/react';
import { themes } from '../styles/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const value = {
    currentTheme,
    setCurrentTheme,
    theme: themes[currentTheme],
  };

  return (
    <ThemeContext.Provider value={value}>
      <FluentThemeProvider theme={themes[currentTheme]}>
        {children}
      </FluentThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
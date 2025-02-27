import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as FluentThemeProvider } from '@fluentui/react';
import { themes } from '../styles/themes';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timeout);
  }, [currentTheme]);

  const value = {
    currentTheme,
    setCurrentTheme,
    theme: themes[currentTheme],
  };

  return (
    <ThemeContext.Provider value={value}>
      <FluentThemeProvider theme={themes[currentTheme]}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTheme}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </FluentThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

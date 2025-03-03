import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from '@fluentui/react';
import { ThemeProvider } from './context/ThemeContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';

initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

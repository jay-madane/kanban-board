import React from 'react';
import { Text } from '@fluentui/react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const Header = () => {
  const { theme } = useTheme();
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: '32px', textAlign: 'center' }}
    >
      <Text 
        variant="xxLarge" 
        styles={{ root: { color: theme.palette.themePrimary, fontWeight: 700, letterSpacing: '1px' } }}
        style={{ marginRight: '10px' }}
      >
        Kanban Board
      </Text>
      <Text 
        variant="large" 
        styles={{ root: { color: theme.palette.neutralSecondary, marginTop: '8px', fontStyle: 'italic' } }}
      >
        Visualize your workflow and boost productivity
      </Text>
    </motion.header>
  );
};

export default Header;

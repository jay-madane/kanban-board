import React from 'react';
import { Text } from '@fluentui/react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { theme } = useTheme();
  
  return (
    <header style={{ marginBottom: '32px' }}>
      <Text variant="xxLarge" styles={{ root: { color: theme.palette.themePrimary } }}>
        Kanban Board
      </Text>
      <Text variant="large" styles={{ root: { color: theme.palette.neutralSecondary, marginTop: '8px' } }}>
        Visualize your workflow and boost productivity
      </Text>
    </header>
  );
};

export default Header;
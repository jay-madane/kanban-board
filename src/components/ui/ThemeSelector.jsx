import React from 'react';
import { Stack, Text, ChoiceGroup } from '@fluentui/react';
import { useTheme } from '../../context/ThemeContext';
import { createThemeContainerStyles } from '../../styles/styleUtils';

const ThemeSelector = () => {
  const { currentTheme, setCurrentTheme, theme } = useTheme();
  const themeContainerStyles = createThemeContainerStyles(theme);

  const handleThemeChange = (_, option) => {
    setCurrentTheme(option.key);
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }} verticalAlign="center">
      <ChoiceGroup
        defaultSelectedKey={currentTheme}
        options={[
          { key: 'light', text: 'Light' },
          { key: 'dark', text: 'Dark' },
          { key: 'nature', text: 'Nature' },
          { key: 'sunset', text: 'Sunset' },
        ]}
        onChange={handleThemeChange}
        styles={{
          root: { display: 'flex' },
          flexContainer: { display: 'flex', flexDirection: 'column' },
          labelWrapper: { marginLeft: 4, marginRight: 12 },
        }}
      />
    </Stack>
  );
};

export default ThemeSelector;
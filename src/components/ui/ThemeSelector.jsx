import React from 'react';
import { Stack, Text, ChoiceGroup } from '@fluentui/react';
import { useTheme } from '../../context/ThemeContext';
import { createThemeContainerStyles } from '../../styles/styleUtils';
import { motion } from 'framer-motion';

const ThemeSelector = () => {
  const { currentTheme, setCurrentTheme, theme } = useTheme();
  const themeContainerStyles = createThemeContainerStyles(theme);

  const handleThemeChange = (_, option) => {
    setCurrentTheme(option.key);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Stack horizontal tokens={{ childrenGap: 16 }} verticalAlign="center">
        <Text variant="medium" styles={{ root: { fontWeight: 600 } }}>
          Theme:
        </Text>
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
            flexContainer: { display: 'flex' },
            labelWrapper: { marginLeft: 4, marginRight: 12 },
          }}
        />
      </Stack>
    </motion.div>
  );
};

export default ThemeSelector;

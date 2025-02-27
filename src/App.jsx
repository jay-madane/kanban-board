import React, { useState } from 'react';
import { PrimaryButton } from '@fluentui/react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

// Context & Hooks
import { useTheme } from './context/ThemeContext';
import { useKanban } from './hooks/useKanban';

// Components
import Header from './components/ui/Header';
import ThemeSelector from './components/ui/ThemeSelector';
import Board from './components/Board/Board';
import TaskDialog from './components/dialogs/TaskDialog';

// Styles
import { createThemeContainerStyles } from './styles/styleUtils';

const App = () => {
  // State management
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isThemeSelectorOpen, setIsThemeSelectorOpen] = useState(false);
  
  // Hooks
  const { addTask } = useKanban();
  const { theme } = useTheme();
  
  // Generate styles based on current theme
  const themeContainerStyles = createThemeContainerStyles(theme);

  // Event handlers
  const handleAddTask = (task) => {
    addTask(task);
    setIsDialogOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        padding: '24px', 
        background: theme.palette.white, 
        minHeight: '100vh',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Parallax speed={-10}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '32px' }}>
          <Header />
        </div>
      </Parallax>
      
      <div style={{ 
        position: 'relative', 
        display: 'flex', 
        justifyContent: 'flex-end',
        marginBottom: '20px' 
      }}>
        <div style={{ position: 'relative' }}>
          <PrimaryButton 
            text="Toggle Theme" 
            onClick={() => setIsThemeSelectorOpen(!isThemeSelectorOpen)}
            styles={{
              root: {
                borderRadius: '6px',
                padding: '0 16px',
                transition: 'all 0.2s ease-in-out',
                ':hover': {
                  transform: 'scale(1.05)',
                },
              },
            }}
          />
          
          {isThemeSelectorOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ 
                position: 'absolute', 
                top: '36px', 
                right: '0', 
                width: '250px',
                background: theme.palette.white, 
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)', 
                borderRadius: '8px', 
                border: `1px solid ${theme.palette.neutralLight}`,
                padding: '12px', 
                zIndex: 10,
              }}
            >
              <div style={{ marginBottom: '8px' }}>
                <h3 style={{ 
                  margin: '0 0 12px 0', 
                  fontSize: '14px', 
                  fontWeight: 600,
                  color: theme.palette.neutralPrimary,
                  borderBottom: `1px solid ${theme.palette.neutralLight}`,
                  paddingBottom: '8px'
                }}>
                  Select Theme
                </h3>
                <ThemeSelector />
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      <Board />
      
      <TaskDialog
        isOpen={isDialogOpen}
        onDismiss={() => setIsDialogOpen(false)}
        onSubmit={handleAddTask}
      />
    </motion.div>
  );
};

export default App;
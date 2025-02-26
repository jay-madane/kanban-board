
import React, { useState } from 'react';
import { PrimaryButton } from '@fluentui/react';

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
    <div style={{ 
      padding: '24px', 
      background: theme.palette.white, 
      minHeight: '100vh',
      transition: 'all 0.2s ease-in-out'
    }}>
      <Header />
      
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
                borderRadius: '3px',
                padding: '0 16px'
              }
            }}
          />
          
          {isThemeSelectorOpen && (
            <div style={{ 
              position: 'absolute', 
              top: '36px', 
              right: '0', 
              width: '250px',
              background: theme.palette.white, 
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)', 
              borderRadius: '4px', 
              border: `1px solid ${theme.palette.neutralLight}`,
              padding: '12px', 
              zIndex: 10
            }}>
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
            </div>
          )}
        </div>
      </div>
      
      <Board />
      
      <TaskDialog
        isOpen={isDialogOpen}
        onDismiss={() => setIsDialogOpen(false)}
        onSubmit={handleAddTask}
      />
    </div>
  );
};

export default App;
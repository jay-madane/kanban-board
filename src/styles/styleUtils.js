import { mergeStyles, AnimationClassNames } from '@fluentui/react';
import { priorityColors } from '../constants/priorities';

// Column Styles
export const createColumnStyles = (theme) => mergeStyles({
  backgroundColor: theme.palette.neutralLighter,
  border: `1px solid ${theme.palette.neutralTertiaryAlt}`,
  borderRadius: '6px',
  padding: '16px',
  width: '280px',
  minHeight: '70vh',
  margin: '0 8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.2s ease',
  ':hover': {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  },
});

// Column Header Styles
export const createColumnHeaderStyles = (theme) => mergeStyles({
  padding: '8px 12px',
  marginBottom: '16px',
  borderRadius: '4px',
  backgroundColor: theme.palette.neutralLight,
  color: theme.palette.neutralPrimary,
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

// Card Styles
export const createCardStyles = (theme, priority) => mergeStyles(
  AnimationClassNames.fadeIn,
  {
    padding: '12px',
    marginBottom: '12px',
    borderRadius: '4px',
    backgroundColor: theme.palette.white,
    borderLeft: `4px solid ${priorityColors[priority].bg}`,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease',
    cursor: 'grab',
    ':hover': {
      boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15)',
      transform: 'translateY(-2px)',
    },
  }
);

// Task Description Styles
export const createTaskDescriptionStyles = (theme) => mergeStyles({
  fontSize: '12px',
  color: theme.palette.neutralSecondary,
  margin: '8px 0',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

// Theme Container Styles
export const createThemeContainerStyles = (theme) => mergeStyles({
  padding: '12px 24px',
  backgroundColor: theme.palette.neutralLight,
  borderRadius: '8px',
  marginBottom: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

// App-specific Styles
export const createAppContainerStyles = (theme) => ({
  padding: '24px',
  background: theme.palette.white,
  minHeight: '100vh',
  fontFamily: theme.fonts?.primary || 'Segoe UI, -apple-system, BlinkMacSystemFont, sans-serif',
  color: theme.palette.neutralPrimary,
  transition: 'all 0.3s ease'
});

export const createAppActionsStyles = (theme) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
  ...AnimationClassNames.fadeIn
});

export const createThemeSelectorDropdownStyles = (theme) => ({
  position: 'absolute',
  top: '45px',
  right: '0',
  background: theme.palette.white,
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)',
  borderRadius: '6px',
  padding: '16px',
  zIndex: 10,
  border: `1px solid ${theme.palette.neutralLight}`,
  minWidth: '280px',
  ...AnimationClassNames.slideDownIn20
});

export const createPrimaryButtonStyles = (theme) => ({
  root: {
    borderRadius: '4px',
    padding: '0 16px',
    height: '38px'
  }
});

export const createThemeIconButtonStyles = (theme) => ({
  root: {
    color: theme.palette.themePrimary,
    backgroundColor: theme.palette.neutralLighter,
    borderRadius: '4px',
    marginLeft: '8px',
    height: '38px',
    width: '38px'
  },
  rootHovered: {
    backgroundColor: theme.palette.neutralLight
  }
});
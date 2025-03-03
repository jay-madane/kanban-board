import { mergeStyles, AnimationClassNames } from '@fluentui/react';
import { priorityColors } from '../constants/priorities';

// Column Styles
export const createColumnStyles = (theme) => mergeStyles({
  backgroundColor: theme.palette.neutralLighter,
  border: `1px solid ${theme.palette.neutralTertiaryAlt}`,
  borderRadius: '12px',
  padding: '16px',
  width: '300px',
  minHeight: '70vh',
  margin: '0 8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease-in-out',
  backdropFilter: 'blur(10px)',
  ':hover': {
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
    transform: 'scale(1.02)',
  },
});

// Column Header Styles
export const createColumnHeaderStyles = (theme) => mergeStyles({
  padding: '12px 16px',
  marginBottom: '16px',
  borderRadius: '6px',
  backgroundColor: theme.palette.neutralLight,
  color: theme.palette.neutralPrimary,
  fontWeight: 700,
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

// Card Styles
export const createCardStyles = (theme, priority) => mergeStyles(
  AnimationClassNames.fadeIn,
  {
    padding: '16px',
    marginBottom: '12px',
    borderRadius: '8px',
    backgroundColor: theme.palette.white,
    borderLeft: `4px solid ${priorityColors[priority].bg}`,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'grab',
    backdropFilter: 'blur(8px)',
    ':hover': {
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(-3px) scale(1.02)',
    },
  }
);

// Task Description Styles
export const createTaskDescriptionStyles = (theme) => mergeStyles({
  fontSize: '14px',
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
  borderRadius: '10px',
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
  fontFamily: theme.fonts?.primary || 'Inter, Poppins, sans-serif',
  color: theme.palette.neutralPrimary,
  transition: 'all 0.3s ease-in-out'
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
  borderRadius: '8px',
  padding: '16px',
  zIndex: 10,
  border: `1px solid ${theme.palette.neutralLight}`,
  minWidth: '280px',
  ...AnimationClassNames.slideDownIn20
});

export const createPrimaryButtonStyles = (theme) => ({
  root: {
    borderRadius: '6px',
    padding: '0 18px',
    height: '40px',
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      transform: 'scale(1.05)',
    },
  }
});

export const createThemeIconButtonStyles = (theme) => ({
  root: {
    color: theme.palette.themePrimary,
    backgroundColor: theme.palette.neutralLighter,
    borderRadius: '6px',
    marginLeft: '8px',
    height: '40px',
    width: '40px',
    transition: 'all 0.2s ease-in-out',
  },
  rootHovered: {
    backgroundColor: theme.palette.neutralLight,
    transform: 'scale(1.08)',
  }
});

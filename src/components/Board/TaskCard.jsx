import React from 'react';
import { Stack, Text, IconButton } from '@fluentui/react';
import { useTheme } from '../../context/ThemeContext';
import { createCardStyles, createTaskDescriptionStyles } from '../../styles/styleUtils';
import { priorityColors } from '../../constants/priorities';
import AssigneeDisplay from '../ui/AssigneeDisplay';
import { motion } from 'framer-motion';

const TaskCard = ({ task, provided, snapshot, onDelete }) => {
  const { theme } = useTheme();
  const cardStyles = createCardStyles(theme, task.priority);
  const descriptionStyles = createTaskDescriptionStyles(theme);

  return (
    <motion.div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={cardStyles}
      style={{
        ...provided.draggableProps.style,
      }}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Stack>
        <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
          <Text variant="mediumPlus" styles={{ root: { fontWeight: 600 } }}>
            {task.title}
          </Text>
          <Stack horizontal>
            <Text style={{ color: priorityColors[task.priority].text }}>
              {priorityColors[task.priority].icon}
            </Text>
            <IconButton
              iconProps={{ iconName: 'Delete' }}
              title="Delete task"
              ariaLabel="Delete task"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(task.id);
              }}
              styles={{
                root: { color: theme.palette.neutralTertiary },
                rootHovered: { color: theme.palette.neutralPrimary }
              }}
            />
          </Stack>
        </Stack>
        
        <div className={descriptionStyles}>
          {task.description}
        </div>
        
        <Stack horizontal horizontalAlign="space-between" verticalAlign="center" tokens={{ childrenGap: 8 }}>
          {task.assignee && <AssigneeDisplay assigneeId={task.assignee} />}
          <Text variant="small" style={{ color: theme.palette.neutralTertiary }}>
            {new Date(task.created).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
          </Text>
        </Stack>
      </Stack>
    </motion.div>
  );
};

export default TaskCard;

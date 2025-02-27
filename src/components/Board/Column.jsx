import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Stack, Text } from '@fluentui/react';
import { useTheme } from '../../context/ThemeContext';
import { createColumnStyles, createColumnHeaderStyles } from '../../styles/styleUtils';
import TaskCard from './TaskCard';
import { motion } from 'framer-motion';

const Column = ({ column, tasks, onDeleteTask }) => {  
  const { theme } = useTheme();
  const columnStyles = createColumnStyles(theme);
  const headerStyles = createColumnHeaderStyles(theme);
  
  return (
    <motion.div 
      className={columnStyles}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className={headerStyles}>
        <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 8 }}>
          <Text>{column.icon}</Text>
          <Text variant="mediumPlus">{column.title}</Text>
          <Text variant="small" styles={{ root: {
            backgroundColor: theme.palette.neutralQuaternary,
            borderRadius: '12px',
            padding: '0px 8px',
            fontWeight: 600,
          }}}>
            {tasks?.length || 0}
          </Text>
        </Stack>
      </div>
      
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <motion.div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              minHeight: '300px',
              backgroundColor: snapshot.isDraggingOver
                ? theme.palette.neutralQuaternaryAlt
                : 'transparent',
              transition: 'background-color 0.2s ease',
              borderRadius: '4px',
              padding: '4px',
              boxShadow: snapshot.isDraggingOver ? '0px 6px 14px rgba(0,0,0,0.15)' : 'none',
            }}
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {tasks?.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided, snapshot) => (
                  <TaskCard
                    task={task}
                    provided={provided}
                    snapshot={snapshot}
                    onDelete={onDeleteTask}  
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </motion.div>
        )}
      </Droppable>
    </motion.div>
  );
};

export default Column;

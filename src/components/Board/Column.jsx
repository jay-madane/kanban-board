import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Stack, Text } from '@fluentui/react';
import { useTheme } from '../../context/ThemeContext';
import { createColumnStyles, createColumnHeaderStyles } from '../../styles/styleUtils';
import TaskCard from './TaskCard';

const Column = ({ column, tasks, onDeleteTask }) => {  
  const { theme } = useTheme();
  const columnStyles = createColumnStyles(theme);
  const headerStyles = createColumnHeaderStyles(theme);
  
  return (
    <div className={columnStyles}>
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
          <div
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
            }}
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
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
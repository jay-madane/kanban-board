import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { IconButton, Stack, Text } from '@fluentui/react';
import { useTheme } from '../../context/ThemeContext';
import { createColumnStyles, createColumnHeaderStyles } from '../../styles/styleUtils';
import TaskCard from './TaskCard';

const Column = ({ column, tasks, onDeleteTask }) => {
  const { theme } = useTheme();
  const columnStyles = createColumnStyles(theme);
  const headerStyles = createColumnHeaderStyles(theme);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  // Determine which tasks to show based on expanded state
  const visibleTasks = tasks.length > 3 && !expanded ? tasks.slice(0, 3) : tasks;

  return (
    <div className={columnStyles}>
      <div className={headerStyles}>
        <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 8 }}>
          <Text>{column.icon}</Text>
          <Text variant="mediumPlus">{column.title}</Text>
          <Text variant="small" styles={{
            root: {
              backgroundColor: theme.palette.neutralQuaternary,
              borderRadius: '12px',
              padding: '0px 8px',
              fontWeight: 600,
            }
          }}>
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
            {visibleTasks?.map((task, index) => (
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

            {tasks.length > 3 && (
              <IconButton
                iconProps={{ iconName: expanded ? "ChevronUp" : "ChevronDown" }}
                title={expanded ? "Show Less" : "Show More"}
                onClick={handleToggle}
                styles={{
                  root: {
                    marginTop: "8px",
                    width: "100%",
                    backgroundColor: "transparent",
                    color: theme.palette.themePrimary,
                    transition: "all 0.2s ease",
                    fontSize: "16px",
                  },
                  rootHovered: {
                    backgroundColor: theme.palette.themeLighter,
                  }
                }}
              />
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
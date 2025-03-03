/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Stack, Text, IconButton } from "@fluentui/react";
import { useTheme } from "../../context/ThemeContext";
import { createColumnStyles, createColumnHeaderStyles } from "../../styles/styleUtils";
import TaskCard from "./TaskCard";
import { motion } from "framer-motion";

const Column = ({ column, tasks, onDeleteTask }) => {
  const { theme } = useTheme();
  const columnStyles = createColumnStyles(theme);
  const headerStyles = createColumnHeaderStyles(theme);

 
  const [visibleCount, setVisibleCount] = useState(3); 
  const [expanded, setExpanded] = useState(false); 

  const handleToggle = () => {
    if (expanded) {
      setVisibleCount(3); 
    } else {
      setVisibleCount(tasks.length); 
    }
    setExpanded(!expanded); 
  };

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
            borderRadius: "12px",
            padding: "0px 8px",
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
              padding: "8px",
              borderRadius: "4px",
              backgroundColor: snapshot.isDraggingOver
                ? theme.palette.neutralQuaternaryAlt
                : "transparent",
              transition: "background-color 0.2s ease",
              boxShadow: snapshot.isDraggingOver ? "0px 6px 14px rgba(0,0,0,0.15)" : "none",
            }}
          >
            {tasks.slice(0, visibleCount).map((task, index) => ( 
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
    </motion.div>
  );
};

export default Column;

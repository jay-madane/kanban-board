import { useState } from 'react';
import { initialTasks } from '../data/initialTasks';
import { animate } from 'framer-motion';

export const useKanban = () => {
  const [tasks, setTasks] = useState(initialTasks);
  
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    
    // If dropped outside a droppable area
    if (!destination) {
      return;
    }
    
    // If dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    
    // Find the task and move it
    const sourceColumn = tasks[source.droppableId];
    const destinationColumn = tasks[destination.droppableId];
    const draggedTask = sourceColumn.find(task => task.id === draggableId);
    
    // Create new arrays without mutating the originals
    const newSourceColumn = [...sourceColumn];
    newSourceColumn.splice(source.index, 1);
    
    // If moving to the same column
    if (source.droppableId === destination.droppableId) {
      newSourceColumn.splice(destination.index, 0, draggedTask);
      const newTasks = {
        ...tasks,
        [source.droppableId]: newSourceColumn,
      };
      setTasks(newTasks);
    } else {
      // Moving to different column
      const newDestinationColumn = [...destinationColumn];
      newDestinationColumn.splice(destination.index, 0, draggedTask);
      const newTasks = {
        ...tasks,
        [source.droppableId]: newSourceColumn,
        [destination.droppableId]: newDestinationColumn,
      };
      setTasks(newTasks);

      // Trigger animation when moving to "Completed" column
      if (destination.droppableId === 'completed') {
        animate("body", { scale: [1, 1.02, 1] }, { duration: 0.3 });
      }
    }
  };
  
  const addTask = (newTask) => {
    console.log('Adding new task:', newTask);
    
    const taskId = `task-${Date.now()}`;
    const taskToAdd = {
      id: taskId,
      ...newTask,
      created: new Date().toISOString(),
    };
    
    // If the task has a columnId property, use that
    // Otherwise use the first column from your columns constant
    const targetColumnId = newTask.columnId || Object.keys(tasks)[0];
    
    console.log(`Target column ID: ${targetColumnId}`);
    console.log('Current tasks state:', tasks);
    
    // Make sure the column exists
    if (!tasks[targetColumnId]) {
      console.error(`Column ${targetColumnId} doesn't exist in tasks:`, Object.keys(tasks));
      return;
    }
    
    const updatedTasks = {
      ...tasks,
      [targetColumnId]: [taskToAdd, ...tasks[targetColumnId]],
    };
    
    console.log('Updated tasks state:', updatedTasks);
    setTasks(updatedTasks);
  };
  
  // Add this new function to delete tasks
  const handleDeleteTask = (taskId) => {
    // Create a new tasks object
    const newTasks = {};
    
    // For each column, filter out the task with the given ID
    Object.keys(tasks).forEach(columnId => {
      newTasks[columnId] = tasks[columnId].filter(task => task.id !== taskId);
    });
    
    setTasks(newTasks);
  };
  
  return {
    tasks,
    handleDragEnd,
    addTask,
    handleDeleteTask  // Export the new function
  };
};

import { useState, useEffect, useCallback } from 'react';
import { initialTasks } from '../data/initialTasks';

export const useKanban = () => {
  // the original tasks unchanged
  const [originalTasks, setOriginalTasks] = useState(initialTasks);
  // the filtered tasks separately
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);
  const [searchQuery, setSearchQuery] = useState('');

  // filtering whenever searchQuery or originalTasks change
  useEffect(() => {
    if (!searchQuery) {
      setFilteredTasks(originalTasks);
      return;
    }
    const newFilteredTasks = {};
    Object.keys(originalTasks).forEach(columnId => {
      newFilteredTasks[columnId] = originalTasks[columnId].filter(task =>
        task.assignee && task.assignee.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setFilteredTasks(newFilteredTasks);
  }, [searchQuery, originalTasks]);

  const handleDragEnd = useCallback((result) => {
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
    const sourceColumn = originalTasks[source.droppableId];
    const destinationColumn = originalTasks[destination.droppableId];
    const draggedTask = sourceColumn.find(task => task.id === draggableId);

    // Create new arrays without mutating the originals
    const newSourceColumn = [...sourceColumn];
    newSourceColumn.splice(source.index, 1);

    // If moving to same column
    if (source.droppableId === destination.droppableId) {
      newSourceColumn.splice(destination.index, 0, draggedTask);
      const newTasks = {
        ...originalTasks,
        [source.droppableId]: newSourceColumn,
      };
      setOriginalTasks(newTasks);
    } else {
      // Moving to different column
      const newDestinationColumn = [...destinationColumn];
      newDestinationColumn.splice(destination.index, 0, draggedTask);
      const newTasks = {
        ...originalTasks,
        [source.droppableId]: newSourceColumn,
        [destination.droppableId]: newDestinationColumn,
      };
      setOriginalTasks(newTasks);
    }
  }, [originalTasks]);

  const addTask = useCallback((newTask) => {

    const taskId = `task-${Date.now()}`;
    const taskToAdd = {
      id: taskId,
      ...newTask,
      created: new Date().toISOString(),
    };

    // If the task has a columnId property, use that
    // Otherwise use the first column from your columns constant
    const targetColumnId = newTask.columnId || Object.keys(originalTasks)[0];

    // Make sure the column exists
    if (!originalTasks[targetColumnId]) {
      console.error(`Column ${targetColumnId} doesn't exist in tasks:`, Object.keys(originalTasks));
      return;
    }

    const updatedTasks = {
      ...originalTasks,
      [targetColumnId]: [taskToAdd, ...originalTasks[targetColumnId]],
    };

    setOriginalTasks(updatedTasks);
  }, [originalTasks]);

  const handleDeleteTask = useCallback((taskId) => {
    // Create a new tasks object
    const newTasks = {};

    // For each column, filter out the task with the given ID
    Object.keys(originalTasks).forEach(columnId => {
      newTasks[columnId] = originalTasks[columnId].filter(task => task.id !== taskId);
    });

    setOriginalTasks(newTasks);
  }, [originalTasks]);

  return {
    tasks: filteredTasks,
    originalTasks,
    searchQuery,
    setSearchQuery,
    handleDragEnd,
    addTask,
    handleDeleteTask
  };
};
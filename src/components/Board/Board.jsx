/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import { columns } from '../../constants/columns';
import { useKanban } from '../../hooks/useKanban';
import { Dialog, DialogType, PrimaryButton, useTheme } from '@fluentui/react';
import TaskForm from '../forms/TaskForm';

const Board = () => {
  const { tasks, handleDragEnd, handleDeleteTask, addTask } = useKanban();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const theme = useTheme();

 
  useEffect(() => {
    console.log('Board rendered with tasks:', tasks);
    console.log('Available columns:', columns.map(col => col.id));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    console.log('Board received new task:', newTask);
    addTask(newTask);
    setIsDialogOpen(false);
  };

  return (
    <>
      <div style={{ padding: '16px', display: 'flex', justifyContent: 'flex-end' }}>
        <PrimaryButton 
          iconProps={{ iconName: 'Add' }} 
          onClick={() => setIsDialogOpen(true)}
          styles={{
            root: {
              borderRadius: '4px',
              transition: 'all 0.2s ease',
            },
            rootHovered: {
              transform: 'translateY(-2px)',
              boxShadow: theme.effects.elevation8
            },
            rootPressed: {
              transform: 'translateY(0)',
            }
          }}
        >
          Add Task
        </PrimaryButton>
      </div>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '8px 0 24px 0' }}>
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks[column.id]}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </DragDropContext>

      <Dialog
        hidden={!isDialogOpen}
        onDismiss={() => setIsDialogOpen(false)}
        dialogContentProps={{
          type: DialogType.normal,
          title: 'Add New Task'
        }}
      >
        <TaskForm 
          onSubmit={handleAddTask} 
          onCancel={() => setIsDialogOpen(false)} 
        />
      </Dialog>
    </>
  );
};

export default Board;
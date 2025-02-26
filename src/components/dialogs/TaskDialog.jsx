import React from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react';
import TaskForm from '../forms/TaskForm';

const TaskDialog = ({ isOpen, onDismiss, onSubmit }) => {
  return (
    <Dialog
      hidden={!isOpen}
      onDismiss={onDismiss}
      dialogContentProps={{
        type: DialogType.normal,
        title: 'Create New Task',
      }}
      modalProps={{
        isBlocking: false,
        styles: { main: { maxWidth: 450 } },
      }}
    >
      <TaskForm 
        onSubmit={onSubmit}
        onCancel={onDismiss}
      />
    </Dialog>
  );
};

export default TaskDialog;

import React, { useState } from 'react';
import { Stack, TextField, Dropdown, PrimaryButton, DefaultButton } from '@fluentui/react';
import { teamMembers } from '../../data/teamMembers';
import PrioritySelector from './PrioritySelector';

const TaskForm = ({ onSubmit, onCancel }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    assignee: '',
    priority: 'medium',
    columnId: 'new', // Make sure this matches your first column ID
  });

  const handleSubmit = () => {
    if (!task.title) return;
    console.log('Submitting task:', task);
    onSubmit(task);
  };

  return (
    <Stack tokens={{ childrenGap: 16 }}>
      <TextField
        label="Task Title"
        required
        value={task.title}
        onChange={(_, value) => setTask({ ...task, title: value })}
      />
      
      <TextField
        label="Description"
        multiline
        rows={3}
        value={task.description}
        onChange={(_, value) => setTask({ ...task, description: value })}
      />
      
      <Dropdown
        label="Assignee"
        options={teamMembers}
        selectedKey={task.assignee}
        onChange={(_, option) => setTask({ ...task, assignee: option.key })}
      />
      
      <PrioritySelector
        value={task.priority}
        onChange={(_, option) => setTask({ ...task, priority: option.key })}
      />
      
      <Stack horizontal tokens={{ childrenGap: 8 }} horizontalAlign="end">
        <DefaultButton onClick={onCancel} text="Cancel" />
        <PrimaryButton onClick={handleSubmit} text="Create" />
      </Stack>
    </Stack>
  );
};

export default TaskForm;
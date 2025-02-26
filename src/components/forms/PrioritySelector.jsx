import React from 'react';
import { Dropdown } from '@fluentui/react';
import { priorityOptions } from '../../constants/priorities';

const PrioritySelector = ({ value, onChange }) => {
  return (
    <Dropdown
      label="Priority"
      options={priorityOptions}
      selectedKey={value}
      onChange={onChange}
    />
  );
};

export default PrioritySelector;
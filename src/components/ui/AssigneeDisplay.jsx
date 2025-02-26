import React from 'react';
import { Persona, PersonaSize, PersonaPresence } from '@fluentui/react';
import { teamMembers } from '../../data/teamMembers';

const AssigneeDisplay = ({ assigneeId, size = PersonaSize.size24 }) => {
  const assignee = teamMembers.find(member => member.key === assigneeId);
  
  if (!assignee) return null;
  
  return (
    <Persona
      size={size}
      text={assignee.text}
      secondaryText={assignee.secondaryText}
      imageUrl={assignee.imageUrl}
      presence={PersonaPresence.online}
    />
  );
};

export default AssigneeDisplay;

export const initialTasks = {
    'new': [
      {
        id: 'task-1',
        title: 'Design User Flows',
        description: 'Create user flow diagrams for the onboarding process',
        assignee: 'alice',
        priority: 'medium',
        created: new Date().toISOString(),
      },
      {
        id: 'task-2',
        title: 'Research API Options',
        description: 'Evaluate different API architectures and make recommendations',
        assignee: 'carol',
        priority: 'low',
        created: new Date().toISOString(),
      },
    ],
    'todo': [
      {
        id: 'task-3',
        title: 'Create Component Library',
        description: 'Develop reusable UI components based on the design system',
        assignee: 'bob',
        priority: 'high',
        created: new Date().toISOString(),
      },
    ],
    'inprogress': [
      {
        id: 'task-4',
        title: 'Fix Navigation Bug',
        description: 'Address the navigation menu disappearing on mobile devices',
        assignee: 'bob',
        priority: 'critical',
        created: new Date().toISOString(),
      },
    ],
    'done': [
      {
        id: 'task-5',
        title: 'Project Kickoff Meeting',
        description: 'Initial team meeting to align on goals and timeline',
        assignee: 'dave',
        priority: 'medium',
        created: new Date().toISOString(),
      },
    ],
  };
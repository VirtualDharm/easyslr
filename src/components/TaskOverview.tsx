import React from 'react';
import TaskCard from '~/components/TaskCard';

const TaskOverview: React.FC = () => {
  // Fetch task overview data

  // Example data
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description of Task 1', deadline: '2024-02-20', priority: 'High' },
    { id: 2, title: 'Task 2', description: 'Description of Task 2', deadline: '2024-02-25', priority: 'Medium' },
    { id: 3, title: 'Task 3', description: 'Description of Task 3', deadline: '2024-02-28', priority: 'Low' },
  ];

  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task.id} title={task.title} description={task.description} deadline={task.deadline} priority={task.priority} />
      ))}
    </div>
  );
};

export default TaskOverview;

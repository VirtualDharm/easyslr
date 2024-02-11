import React from 'react';

interface TaskCardProps {
  title: string;
  description: string;
  deadline: string;
  priority: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, deadline, priority }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-sm text-gray-600">Deadline: {deadline}</p>
      <p className="text-sm text-gray-600">Priority: {priority}</p>
    </div>
  );
};

export default TaskCard;

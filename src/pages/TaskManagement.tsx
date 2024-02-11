import React from 'react';
import TaskForm from '~/components/TaskForm'; // Assuming you have a TaskForm component
import TaskTable from '~/components/TaskTable'; // Assuming you have a TaskTable component

const TaskManagement: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Create Task</h2>
          <TaskForm />
          {/* Render task creation form */}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Task List</h2>
          <TaskTable />
          {/* Render task table */}
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;

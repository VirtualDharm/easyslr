import React from 'react';
import ProjectCard from '~/components/ProjectCard'; // Assuming you have a ProjectCard component
import TaskList from '~/components/TaskList'; // Assuming you have a TaskList component

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Ongoing Projects</h2>
          <ProjectCard />
          {/* Render list of project cards */}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Task Overview</h2>
          <TaskList />
          {/* Render task list */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

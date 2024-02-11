import React from 'react';
import ProjectCard from '~/components/ProjectCard';

const ProjectList: React.FC = () => {
  // Fetch ongoing projects data

  // Example data
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' },
  ];

  return (
    <div>
      {projects.map(project => (
        <ProjectCard key={project.id} title={project.title} description={project.description} />
      ))}
    </div>
  );
};

export default ProjectList;

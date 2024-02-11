import React from 'react';
import ProjectSettingsForm from '~/components/ProjectSettingsForm';

const ProjectSettings: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Project Settings</h1>
      <div>
        <h2 className="text-xl font-semibold mb-4">Project Preferences</h2>
        <ProjectSettingsForm />
      </div>
    </div>
  );
};

export default ProjectSettings;

import React from 'react';
import UserProfileForm from '~/components/UserProfileForm'; // Assuming you have a UserProfileForm component

const UserProfile: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div>
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
        <UserProfileForm />
        {/* Render user profile form */}
      </div>
    </div>
  );
};

export default UserProfile;

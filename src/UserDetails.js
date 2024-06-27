import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar_url} alt="avatar" width="150" />
      <p><strong>Username:</strong> {user.login}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Public Repos:</strong> {user.public_repos}</p>
      <p><strong>Followers:</strong> {user.followers}</p>
      <p><strong>Following:</strong> {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">Visit Profile</a>
    </div>
  );
};

export default UserDetails;

import React, { useState } from 'react';
import axios from 'axios';
import UserDetails from './UserDetails';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setUserData(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log('User data:', response.data);  // Debugging statement
      setUserData(response.data);
    } catch (err) {
      console.log('Error:', err);  // Debugging statement
      setError('User not found');
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username} 
          onChange={handleInputChange} 
          placeholder="Enter GitHub username" 
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {userData && <UserDetails user={userData} />}
    </div>
  );
};

export default App;

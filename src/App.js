import React from 'react';
import TaskList from './Components/TaskList';

const App = () => {
  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#4A90E2', // A vibrant blue
    textAlign: 'center',
    marginTop: '1rem',
    marginBottom: '2rem',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div>
      <h1 style={headingStyle}>StudyPal Task Manager</h1>
      <TaskList />
    </div>
  );
};

export default App;

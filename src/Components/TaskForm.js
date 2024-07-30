import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSave, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ 
      title, 
      description, 
      id: taskToEdit ? taskToEdit.id : Date.now(), 
      completed: false, 
      lastUpdated: new Date().toISOString() 
    });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9', marginBottom: '20px' }}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', fontSize: '16px', cursor: 'pointer' }}>Save Task</button>
    </form>
  );
};

export default TaskForm;

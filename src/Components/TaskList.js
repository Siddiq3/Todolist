import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import tasksData from '../data/tasks.json';
import SearchBar from './SearchBar';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const handleSaveTask = (task) => {
    setTasks((prevTasks) => {
      const taskExists = prevTasks.find((t) => t.id === task.id);
      if (taskExists) {
        return prevTasks.map((t) => (t.id === task.id ? task : t));
      }
      return [...prevTasks, task];
    });
    setTaskToEdit(null);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <TaskForm onSave={handleSaveTask} taskToEdit={taskToEdit} />
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      ))}
    </div>
  );
};

export default TaskList;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faEdit, faTrashAlt, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
      <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {task.title}
        <button onClick={() => onToggle(task.id)} style={{ padding: '5px 10px', border: 'none', borderRadius: '5px', backgroundColor: task.completed ? '#28a745' : '#ffc107', color: 'white', cursor: 'pointer' }}>
          <FontAwesomeIcon icon={task.completed ? faUndo : faCheck} />
        </button>
      </h3>
      <button onClick={toggleExpand} style={{ padding: '5px 10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
        <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
      </button>
      {isExpanded && (
        <div style={{ marginTop: '10px' }}>
          <p>{task.description}</p>
          <p>Last Updated: {new Date(task.lastUpdated).toLocaleString()}</p>
          <button onClick={() => onEdit(task)} style={{ marginRight: '10px', padding: '5px 10px', border: 'none', borderRadius: '5px', backgroundColor: '#17a2b8', color: 'white', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button onClick={() => onDelete(task.id)} style={{ marginRight: '10px', padding: '5px 10px', border: 'none', borderRadius: '5px', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;

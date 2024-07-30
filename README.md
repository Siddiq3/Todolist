# StudyPal Task Manager

## Overview

StudyPal Task Manager is a React application designed to assist users in managing their tasks. It allows users to create, update, delete, and mark tasks as done. The application features a search bar for filtering tasks and an expandable list format to view task details and the last update timestamp.

## System Design

The application is structured to provide a clean and intuitive user experience. It is built with React and follows a component-based architecture. Here’s a brief overview of the system design:

1. **Components**:
   - **`SearchBar`**: A component that provides a text input for filtering tasks based on the search query.
   - **`TaskForm`**: A form component for adding and editing tasks. It includes fields for the task title and description.
   - **`TaskItem`**: A component that displays individual tasks. It includes functionality to expand/collapse the task details, toggle completion status, and edit or delete tasks.
   - **`TaskList`**: The main component that manages the list of tasks, handles user interactions, and integrates the other components.

2. **Data**:
   - **`tasks.json`**: A dummy JSON file used to simulate task data. It includes a list of tasks with properties such as `id`, `title`, `description`, `completed`, and `lastUpdated`.

3. **State Management**:
   - The application uses React's state management to handle task data, search queries, and the task being edited.

## Implementation

### Components

- **`SearchBar.js`**: 
  - Renders an input field for searching tasks.
  - Calls the `onSearch` function passed as a prop whenever the input value changes.

- **`TaskForm.js`**:
  - Manages form state for task title and description.
  - Handles form submission to create or update a task.
  - Uses `useEffect` to populate form fields when editing a task.

- **`TaskItem.js`**:
  - Displays the task title and a button to toggle completion status.
  - Provides expand/collapse functionality to show or hide task details.
  - Includes buttons to edit or delete the task.

- **`TaskList.js`**:
  - Manages the list of tasks and integrates `SearchBar`, `TaskForm`, and `TaskItem` components.
  - Implements search functionality and filters tasks based on the search query.
  - Handles task creation, updating, deletion, and toggling.

### Data

- **`tasks.json`**:
  - Contains an array of task objects with fields such as `id`, `title`, `description`, `completed`, and `lastUpdated`.

## Instructions

### Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Siddiq3/Todolist.git


2. **Navigate to the Project Directory:**:
   ```bash
   cd study-pal-task-manager

   
3. **Install Dependencies:**:
   ```bash
npm install



4. **Start the Development Server:**:
   ```bash
npm start

Open http://localhost:3000 in your browser to view the application. The page will reload automatically when you make changes.


### Scripts

## npm start: Runs the app in development mode.
## npm test: Launches the test runner in interactive watch mode.
## npm run build: Builds the app for production to the build folder.
## npm run eject: Ejects the configuration files and dependencies (one-way operation).

#### Contribution
To contribute to this project:

### Fork the repository.
Create a new branch for your changes.
Commit your changes with clear messages.
Push your branch and create a pull request.
### License
This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More
For more information about React, check out the React documentation. For details on Create React App, see the Create React App documentation.


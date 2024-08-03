# StudyPal Task Manager

## Overview

StudyPal Task Manager is a React application for managing tasks for each user of the application. It enables a user to make additions, changes, deletions or set it as complete in the course of using it. The application has a search bar option to filter the tasks and a collapsible panel-style to view the task description and the timestamp of the last update.

## System Design

In terms of the application’s design, it is developed to be easily manageable and facilitate an easy navigation process. Currently, it is built using React and adheres to the component-oriented design. Here’s a brief overview of the system design:Here’s a brief overview of the system design:

1. **Components**:
- **`SearchBar`**: One of its part which is a text field through which one can search the wanted tasks in accordance with the query.
- **`TaskForm`**: Currently, it is proposed to create a form component for adding and editing tasks associated with the application. It has fields for the title of the delivered task and the description.
- **`TaskItem`**: The former is a component that shows each of the tasks that a person has to complete. It should have features that allow the user to open and close a particular task along with turning on/off the check mark, editing the task, and deleting it.
- **`TaskList`**: The core component which controls the list of tasks, interacts with a user and works with the other components.

2. **Data**:
- **`tasks. json`**: A file that is used to mimic the particular tasks data. This includes a list comprising of tasks with attributes such as, id, the overall title, the description part, the completed status, the last update status.

3. **State Management**:
- The state data in the application are managed with React’s state mechanisms, and these include tasks, a search query, and the currently edited task.

## Implementation

### Components

- **`SearchBar. js`**:
- Displays an input box for entering a search query for the tasks.
- Invokes the onSearch function which is a prop each time the input value changes.

- **`TaskForm. js`**:
- Is responsible to manage the form state for the task title and description.
- Operates submit form to create or update a task.
- Runs `useEffect` to prefill the form fields when editing a particular task.

- **`TaskItem. js`**: 
 - Shows a short description of the particular task and a button that switches its status. 
 - Enables users to expand/ collapse to get a view of other details or to conceal other details in a task. 
 - Consists of buttons that can either modify or remove the task. 
 
 - **`TaskList. js`**: 
 - Request and maintains the list of tasks and composites the `SearchBar`, `TaskForm` and `TaskItem` components. 
 - Mainly supports the searching operation and filters the tasks according to the search string. 
 - Responsible for creation, modification, deletion and enabling/disabling of the tasks. 
 
 ### Data 
 
 - **`tasks. json`**: 
 - A set of objects of task that has fields like id, title, description, completed or not and last update of the task. 
 
 ## Instructions 
 
 ### Setup 
 
 1. **Clone the Repository**: 
 ```bash 
 git clone https://github. com/Siddiq3/Todolist. git 
 
 
 2. **Navigate to the Project Directory:**: _("I never heard of such thing”_ – could be a possible apology for a person’s ignorance of a certain phenomenon or object. 
 ```bash 
 cd study-pal-task-manager 
 
 
 3. **Install Dependencies:**: 
 ```bash 
 npm install 
 
 
 
 4. **Start the Development Server:**: 
 ```bash 
 npm start 
 
 Open http:>In your browser go to http://localhost:3000 in order to use application. The page will refresh in case of some changes that you may be doing to it. 
 
 
 ### Scripts 
 
 ## npm start: Runs the app in development mode. 
 ## npm test: Launches the test runner in interactive watch mode. 
 ## npm run build: Builds the app for production to the build folder. 
 ## npm run eject: Ejects the configuration files and dependencies (one-way operation). 
 
 #### Contribution 
 To contribute to this project:To contribute to this project: 
 
 ### Fork the repository. 
 Introduce a new branch for your changes. 
 When committing changes make sure the messages are explanatory. 
 Check-in your branch and create a pull request. 
 ### License 
 All these codes written in this project are copyright by the author and released under MIT License shown in the LICENSE file. 
 
 ## Learn More 
 For more information about React I would recommend visiting the React documentation. For more information on My New App, see the documentation on Create React App. 
 

<h1><img src="./src/img/favicon.ico" width="30px" height="30px" style="color: #1c71d8; vertical-align: middle; margin-right: 5px"></img>
TodoVault App</h1>

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Modules](#modules)
- [Contributing](#contributing)
- [License](#license)

## Description

The TodoVault App is a web-based application that helps users organize and manage their tasks and projects efficiently. It allows users to create projects, add, edit, and remove tasks, set due dates, prioritize them and mark tasks as complete or incomplete. The app provides a user-friendly interface for seamless task management.

## Features

- Create, edit, and delete projects.
- Add, edit, and remove tasks within projects.
- Set due dates and priorities for tasks.
- Mark tasks as completed.
- View tasks by today, tomorrow, and this week.
- Store and retrieve Projects and Tasks to localStorage.
- Intuitive and responsive user interface.

## Installation

To run the Task Manager App on your local machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/NitanJana/todoVault.git
```

or

```bash
git clone git@github.com:NitanJana/todoVault.git
```

2. Navigate to the project directory:

```bash
cd task-manager-app
```

3. Open index.html in your preferred web browser.

## Usage

1. Create a new project by clicking on the "New Project" button.
2. Add tasks to the project by clicking on the project and then the "Add Task" button.
3. Fill in task details such as name, description, due date, and priority.
4. Click "Save" to add the task to the project.
5. Edit or delete tasks using the provided options.
6. Mark tasks as complete or incomplete.
7. Expand or collapse to see detailed description.
8. Use the task filter to view tasks by today, tomorrow, and this week.

## Modules

The application is structured using the following JavaScript modules:

- displayController.js: Handles displaying everything in the page.
- notificationController.js: Handles displaying toast notifications.
- project.js: Defines the Project class for managing projects and their associated tasks.
- projectList.js: Defines the ProjectList class for managing a list of projects.
- storage.js: Manages data storage using localStorage and provides methods for saving and retrieving projects.
- todo.js: Defines the ToDo class for representing individual tasks.

For detailed information on each module, refer to the respective source files.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:

```bash
git checkout -b feature-name
```

3. Make your changes and commit them:

```bash
git commit -m 'Add some feature'
```

4. Push to the branch:

```bash
git push origin feature-name
```

5. Create a new pull request.

## License

This project is licensed under the [MIT License](LICENSE).
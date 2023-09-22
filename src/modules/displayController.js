import ToDo from "./todo";
import Project from "./project";
import ProjectList from "./projectList";

const list = new ProjectList();

export default class DisplayController {
  static loadHomePage() {
    this.openProject(list.getProjectList()[0]);
    this.initProjectButtons();
  }

  static openProject(project) {
    this.loadProjectName(project);
    this.loadProjectDescription(project);    
    this.loadProjectTodoList(project);
  }
  
  static loadProjectName(project) {
    document.querySelector('.project-name').textContent = project.getName();
  }
  
  static loadProjectDescription(project) {
    document.querySelector('.project-description').textContent = project.getDescription();
  }

  static loadProjectTodoList(project) {
    const todoListContainer = document.querySelector('.project-todoList-container');
    todoListContainer.textContent = '';
    project.getTodoList().forEach((todo) => {
      const tempTodo = document.createElement('div');
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'delete';
      deleteButton.addEventListener ('click',DisplayController.handleDeleteTodoButton)
      tempTodo.textContent = todo.getName();
      todoListContainer.append(tempTodo,deleteButton);
    });
  }

  static initProjectButtons() {
    const projectButtons = document.querySelectorAll('.project-button');
    const newProjectButton = document.querySelector('.new-project');
    const newTodoButton = document.querySelector('.new-todo');

    projectButtons.forEach((projectButton) => projectButton.addEventListener('click',DisplayController.handleProjectButtons));
    newProjectButton.addEventListener('click', DisplayController.createNewProject);
    newTodoButton.addEventListener('click', DisplayController.createNewTodo);
  }

  static handleProjectButtons() {
    DisplayController.openProject(list.getProject(this.textContent));
  }
  
  static createNewProject() {
    const existingProjectCreateContainer = document.querySelector('.project-create-container');
  
    if (!existingProjectCreateContainer) {
      const projectContainerInput = document.createElement('input');
      const saveProjectButton = document.createElement('button');
      const cancelProjectButton = document.createElement('button');
      const projectContainerDiv = document.createElement('div');
      
      projectContainerInput.type = 'text';
      saveProjectButton.textContent = '✓';
      cancelProjectButton.textContent = 'x';
      saveProjectButton.classList.add('project-save-button');
      cancelProjectButton.classList.add('project-cancel-button');
      projectContainerDiv.classList.add('project-create-container');
      projectContainerDiv.append(projectContainerInput, saveProjectButton, cancelProjectButton);
      document.getElementById('projects-container').appendChild(projectContainerDiv);    
      projectContainerInput.focus();
      
      saveProjectButton.addEventListener('click', DisplayController.handleSaveProjectButton);
      
      cancelProjectButton.addEventListener('click', function() {
        projectContainerDiv.remove();
      }); 
    } else {
      existingProjectCreateContainer.focus();
    }
  }
  
  static handleSaveProjectButton() {
    const projectContainerDiv = document.querySelector('.project-create-container')
    const projectName = projectContainerDiv.children[0].value;
    const outputDiv = document.createElement('div');
    if (projectName) {
      outputDiv.textContent = projectName;
      projectContainerDiv.replaceWith(outputDiv);
      outputDiv.className = 'sidebar-user-project project-button';
      outputDiv.addEventListener('click', DisplayController.handleProjectButtons);
      list.addProject(new Project(projectName));
      DisplayController.openProject(list.getProject(projectName));
    }
  }

  static createNewTodo() {
    const existingTodoCreateContainer = document.querySelector('.todo-create-container');
  
    if (!existingTodoCreateContainer) {
      const todoContainerInput = document.createElement('input');
      const saveTodoButton = document.createElement('button');
      const cancelTodoButton = document.createElement('button');
      const todoCreateContainer = document.createElement('div');
      
      todoContainerInput.type = 'text';
      saveTodoButton.textContent = 'Save';
      cancelTodoButton.textContent = 'Cancel';
      todoCreateContainer.classList.add('todo-create-container');
      todoCreateContainer.append(todoContainerInput, saveTodoButton, cancelTodoButton);
      document.querySelector('.project-todoList-container').appendChild(todoCreateContainer);
      todoContainerInput.focus();
      
      saveTodoButton.addEventListener('click', DisplayController.handleSaveTodoButton);
      
      cancelTodoButton.addEventListener('click', function () {
        todoCreateContainer.remove();
      });
    }else {
    existingTodoCreateContainer.focus();
    }
  }
  
  static handleSaveTodoButton() {
    const todoCreateContainer = document.querySelector('.todo-create-container');
    const todoText = todoCreateContainer.children[0].value;
    const deleteTodoButton = document.createElement('button');
    const outputDiv = document.createElement('div');

    deleteTodoButton.textContent = 'delete';
    deleteTodoButton.addEventListener('click', DisplayController.handleDeleteTodoButton);
    if (todoText) {
      outputDiv.append(todoText, deleteTodoButton);
      outputDiv.classList.add('todo-container');
      todoCreateContainer.replaceWith(outputDiv);
      list.getCurrentProject().addTodo(todoText);
    }
  }

  static handleDeleteTodoButton() {
    list.getCurrentProject().removeTodo(this.previousSibling.textContent);
    DisplayController.openProject(list.getCurrentProject());
  }

}
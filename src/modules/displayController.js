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
      const todoName = document.createElement('div');
      const todoDescription = document.createElement('div');
      const deleteButton = document.createElement('button');
      const todoContainer = document.createElement('div');
      todoName.classList.add('todo-container-text');
      todoDescription.classList.add('todo-container-text');
      deleteButton.classList.add('todo-container-delete-button');
      todoContainer.classList.add('todo-container');
      deleteButton.textContent = 'delete';
      deleteButton.addEventListener ('click',DisplayController.handleDeleteTodoButton)
      todoName.textContent = todo.getName();
      todoDescription.textContent = todo.getDescription();
  
      todoContainer.append(todoName,todoDescription,deleteButton);
      todoListContainer.append(todoContainer);
    });
  }

  static initProjectButtons() {
    const projectButtons = document.querySelectorAll('.project-button');
    const newProjectButton = document.querySelector('#create-new-project');
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
      projectContainerInput.classList.add('project-container-input');
      saveProjectButton.classList.add('project-container-save-button');
      cancelProjectButton.classList.add('project-container-cancel-button');
      projectContainerDiv.classList.add('project-create-container');
      projectContainerDiv.append(projectContainerInput, saveProjectButton, cancelProjectButton);
      document.getElementById('projects-container').appendChild(projectContainerDiv);    
      projectContainerInput.focus();
      
      saveProjectButton.addEventListener('click', DisplayController.handleSaveProjectButton);
      
      cancelProjectButton.addEventListener('click', function() {
        projectContainerDiv.remove();
      }); 
    } else {
      existingProjectCreateContainer.children[0].focus();
    }
  }
  
  static handleSaveProjectButton() {
    const projectContainerDiv = document.querySelector('.project-create-container');
    const projectName = document.querySelector('.project-container-input').value;
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
    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = document.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = document.querySelector('#todo-create-container-description');
    const saveTodoButton = document.querySelector('.save-todo-button');
    const cancelTodoButton = document.querySelector('.cancel-todo-button');
    todoCreateContainerName.focus();
    todoModal.showModal();
    
    saveTodoButton.addEventListener('click', DisplayController.handleSaveTodoButton);
    
    cancelTodoButton.addEventListener('click', function () {
      todoCreateContainerName.value = '';
      todoCreateContainerDescription.value = '';
      todoModal.close();
    });
  }
  
  static handleSaveTodoButton() {
    const todoCreateContainerName = document.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = document.querySelector('#todo-create-container-description');
    
    const todoName = document.createElement('div'); 
    const todoDescription = document.createElement('div'); 
    const deleteTodoButton = document.createElement('button');
    const outputDiv = document.createElement('div');
    
    const todoListContainer = document.querySelector('.project-todoList-container');
    const todoModal = document.querySelector('#todoModal');
    
    todoName.classList.add('todo-container-text');
    todoDescription.classList.add('todo-container-text');
    deleteTodoButton.classList.add('todo-container-delete-button');
    todoName.textContent = todoCreateContainerName.value;
    todoDescription.textContent = todoCreateContainerDescription.value;
    todoCreateContainerName.value = '';
    todoCreateContainerDescription.value = '';
    deleteTodoButton.textContent = 'delete';

    deleteTodoButton.addEventListener('click', DisplayController.handleDeleteTodoButton);
    
    todoModal.close();
    if (todoName.textContent) {
      outputDiv.append(todoName,todoDescription, deleteTodoButton);
      outputDiv.classList.add('todo-container');
      todoListContainer.append(outputDiv);
      list.getCurrentProject().addTodo(todoName.textContent);
      list.getCurrentProject().getTodo(todoName.textContent).setDescription(todoDescription.textContent)
    }
  }

  static handleDeleteTodoButton() {
    list.getCurrentProject().removeTodo(this.parentNode.children[0].textContent);
    DisplayController.openProject(list.getCurrentProject());
  }
}
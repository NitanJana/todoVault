import ToDo from "./todo";
import Project from "./project";
import ProjectList from "./projectList";
import NotificationController from "./notificationController";
import Storage from "./storage";

export default class DisplayController {
  static currentTodo = null;
  static loadHomePage() {
    DisplayController.loadProjects();
    DisplayController.openProject(Storage.getProjectList().getProjects()[0]);
    DisplayController.initProjectButtons();
  }

  static loadProjects() {
    Storage.getProjectList().getProjects().forEach((project) =>DisplayController.addProjectButtons(project.getName()));
  }

  static openProject(project) {
    DisplayController.loadProjectName(project);
    DisplayController.loadProjectDescription(project);    
    DisplayController.loadProjectTodoList(project);
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
      const editButton = document.createElement('img');
      const deleteButton = document.createElement('img');
      const expandButton = document.createElement('img');
      const todoDescription = document.createElement('div');
      const todoContainer = document.createElement('div');

      todoName.classList.add('todo-container-name');
      todoDescription.classList.add('todo-container-description');
      editButton.classList.add('todo-container-edit-button');
      deleteButton.classList.add('todo-container-delete-button');
      expandButton.classList.add('todo-container-expand-button');
      todoContainer.classList.add('todo-container');
      todoContainer.dataset.priority = todo.getPriority();

      todoName.textContent = todo.getName();
      editButton.src = './img/edit-icon.svg';
      deleteButton.src = './img/delete-icon.svg';
      expandButton.src = './img/expand-more-icon.svg';
      todoDescription.textContent = todo.getDescription();

      editButton.addEventListener('click',DisplayController.handleEditTodoContainerButton);
      expandButton.addEventListener('click',DisplayController.handleExpandTodoButton);
      deleteButton.addEventListener('click', DisplayController.handleDeleteTodoButton);
  
      todoContainer.append(todoName,editButton,deleteButton,expandButton,todoDescription);
      todoListContainer.append(todoContainer);
    });
  }


  static handleExpandTodoButton() {
    const todoDescription = this.nextElementSibling;
    if (todoDescription.classList.contains('todo-description-expanded')){
      todoDescription.classList.remove('todo-description-expanded');
      todoDescription.classList.add('todo-description-hidden');
    } else {
      todoDescription.classList.remove('todo-description-hidden');
      todoDescription.classList.add('todo-description-expanded');
    } 
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
    DisplayController.openProject(Storage.getProjectList().getProject(this.textContent));
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
      Storage.addProject(new Project(projectName));
      DisplayController.openProject(Storage.getProjectList().getProject(projectName));
    }
  }

  static addProjectButtons(projectName) {
    const outputDiv = document.createElement('div');
    outputDiv.textContent = projectName;
    outputDiv.className = 'sidebar-user-project project-button';
    outputDiv.addEventListener('click', DisplayController.handleProjectButtons); 
    document.getElementById('projects-container').appendChild(outputDiv); 
  }

  static createNewTodo() {
    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = document.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = document.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = document.querySelector('#todo-create-container-priority');
    const saveTodoButton = document.querySelector('.save-todo-button');
    const cancelTodoButton = document.querySelector('.cancel-todo-button');
    todoCreateContainerName.focus();
    todoModal.showModal();
    
    saveTodoButton.addEventListener('click',DisplayController.handleSaveTodoButton);
    
    cancelTodoButton.addEventListener('click', function () {
      todoCreateContainerName.value = '';
      todoCreateContainerDescription.value = '';
      todoCreateContainerPriority.value = 'low';
      todoModal.close();
    });
  }
  
  static handleEditTodoContainerButton() {
    let currentProject = DisplayController.getCurrentProject();
    const currentTodo = currentProject.getTodo(this.parentNode.querySelector('.todo-container-name').textContent);
    DisplayController.currentTodo = currentTodo;
    const todoName = currentTodo.getName();
    const todoDescription = currentTodo.getDescription();
    const todoPriority = currentTodo.getPriority();

    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = todoModal.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = todoModal.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = todoModal.querySelector('#todo-create-container-priority');
    const saveTodoButton = todoModal.querySelector('.save-todo-button');

    todoModal.showModal();
    todoCreateContainerName.value = todoName;
    todoCreateContainerDescription.value = todoDescription;
    todoCreateContainerPriority.value = todoPriority;
    
    saveTodoButton.addEventListener('click',DisplayController.handleSaveTodoButton);
    
  }
  static getCurrentProject() {
    return Storage.getProjectList().getProject(document.querySelector('.project-name').textContent);
  }
  
  static handleSaveTodoButton(e) {
    let currentTodo = DisplayController.currentTodo;
    e.preventDefault();
    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = todoModal.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = todoModal.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = todoModal.querySelector('#todo-create-container-priority');
    let currentProject = DisplayController.getCurrentProject();
    if (todoCreateContainerName.value === "") {
      NotificationController.showToast('Todo name must not be empty');
    }
    else {
      if (currentTodo === null) {
        if (currentProject.getTodo(todoCreateContainerName.value) !== undefined) {
          NotificationController.showToast('Todo name already exists');
        }
        else {
          let todo = new ToDo();
          todo.setName(todoCreateContainerName.value);
          todo.setDescription(todoCreateContainerDescription.value)
          todo.setPriority(todoCreateContainerPriority.value)
          Storage.addTodo(currentProject,todo);
          todoModal.close();
          todoCreateContainerName.value = '';
          todoCreateContainerDescription.value = '';
          todoCreateContainerPriority.value = 'low';
        }
      }
      else {
        if (currentTodo.getName() !== todoCreateContainerName.value) {
          if (currentProject.getTodo(todoCreateContainerName.value) !== undefined) {
            
            NotificationController.showToast('Todo name already exists');
          }
          else {
            Storage.editTodo(currentProject,currentTodo.getName(),todoCreateContainerName.value,todoCreateContainerDescription.value,todoCreateContainerPriority.value);
            todoModal.close();
            todoCreateContainerName.value = '';
            todoCreateContainerDescription.value = '';
            todoCreateContainerPriority.value = 'low';
            DisplayController.currentTodo = null;
          }
        }
        else {
          Storage.editTodo(currentProject,currentTodo.getName(),todoCreateContainerName.value,todoCreateContainerDescription.value,todoCreateContainerPriority.value);
          todoModal.close();
          todoCreateContainerName.value = '';
          todoCreateContainerDescription.value = '';
          todoCreateContainerPriority.value = 'low';
          DisplayController.currentTodo = null;
        }
      }
    }
    DisplayController.loadProjectTodoList(DisplayController.getCurrentProject());
  }

  static handleDeleteTodoButton() {
    Storage.removeTodo(DisplayController.getCurrentProject(),this.parentNode.children[0].textContent);
    this.parentNode.remove();
    // DisplayController.openProject(DisplayController.getCurrentProject());
  }
}
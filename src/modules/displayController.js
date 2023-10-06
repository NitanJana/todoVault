import ToDo from "./todo";
import Project from "./project";
import NotificationController from "./notificationController";
import Storage from "./storage";
import { format, compareAsc } from 'date-fns'

export default class DisplayController {
  static currentTodo = null;
  static loadHomePage() {
    DisplayController.loadProjects();
    DisplayController.openProject(Storage.getProjectList().getProjects()[0]);
    document.querySelector('.sidebar-project-name').classList.add('sidebar-project-name-selected');
    DisplayController.initProjectButtons();
    
  }

  static loadProjects() {
    document.querySelector('#projects-container').innerHTML='';
    Storage.getProjectList().getProjects().forEach((project) =>DisplayController.addProjectButtons(project));
  }

  static openProject(project) {
    DisplayController.loadProjectName(project);
    DisplayController.loadEditProjectButton();
    DisplayController.loadDeleteProjectButton();
    DisplayController.loadProjectDescription(project);    
    DisplayController.loadProjectTodoList(project);
  }

  static getCurrentProject() {
    return Storage.getProjectList().getProject(document.querySelector('.project-name').textContent);
  }
  
  static loadProjectName(project) {
    const projectName = document.querySelector('.project-name');
    projectName.textContent = project.getName();
    projectName.contentEditable = 'false';
    projectName.classList.remove('editable');
  }
  
  static loadEditProjectButton() {
    const projectNameContainer = document.querySelector('.project-name-container');
    const projectButtonsContainer = document.querySelector('.project-buttons');
    const existingEditButton = projectNameContainer.querySelector('.project-edit-icon');
    const projectEditSaveButton = document.querySelector('.project-edit-save-icon');
    
    if (projectEditSaveButton) {
      projectEditSaveButton.remove();
    }
    
    const projectNamesToExclude = ['Inbox', 'This Week', 'Today'];
    const projectName = projectNameContainer.querySelector('.project-name').textContent;
    
    if (projectNamesToExclude.includes(projectName)) {
      // Project name is one of the specified ones, do nothing
      if (existingEditButton) {
        existingEditButton.remove(); // Remove edit button if it exists
      }
    } else {
      if (!existingEditButton) {
        // Create and add edit button only if it doesn't exist
        const projectEditButton = document.createElement('img');
        projectEditButton.src = './img/edit-icon.svg';
        projectEditButton.title = 'Edit Project';
        projectEditButton.classList.add('project-edit-icon');
        projectEditButton.addEventListener('click', DisplayController.handleEditProjectButton);
        projectButtonsContainer.appendChild(projectEditButton);
      }
    }
  }
  
  static loadDeleteProjectButton() {
    const projectNameContainer = document.querySelector('.project-name-container');
    const projectButtonsContainer = document.querySelector('.project-buttons');
    const existingDeleteButton = projectNameContainer.querySelector('.project-delete-icon');
    
    // Check if project name is one of the specified ones
    const projectNamesToExclude = ['Inbox', 'This Week', 'Today'];
    const projectName = projectNameContainer.querySelector('.project-name').textContent;
    
    if (projectNamesToExclude.includes(projectName)) {
      // Project name is one of the specified ones, do nothing
      if (existingDeleteButton) {
        existingDeleteButton.remove(); // Remove delete button if it exists
      }
    }
    else {
      if (!existingDeleteButton) {
        // Create and add delete button only if it doesn't exist
        const projectDeleteButton = document.createElement('img');
        projectDeleteButton.src = './img/delete-icon.svg';
        projectDeleteButton.title = 'Delete Project';
        projectDeleteButton.classList.add('project-delete-icon');
        projectDeleteButton.addEventListener('click', DisplayController.handleDeleteProjectButton);
        projectButtonsContainer.appendChild(projectDeleteButton);
      }
    }
  }
  
  static handleEditProjectButton() {
    const projectButtonsContainer = document.querySelector('.project-buttons');
    const projectName = document.querySelector('.project-name');
    const projectDescription = document.querySelector('.project-description');
    const currentProjectName = projectName.textContent;
    const existingProjectEditSaveButton = document.querySelector('.project-edit-save-icon');
    
    if (!existingProjectEditSaveButton) {
      const projectEditSaveButton = document.createElement('img');
      projectEditSaveButton.classList.add('project-edit-save-icon');
      projectEditSaveButton.src = './img/save-icon.svg';
      projectEditSaveButton.title = 'Save Changes';
      projectEditSaveButton.addEventListener('click', () => DisplayController.handleProjectEditSaveButton(currentProjectName));
      projectButtonsContainer.appendChild(projectEditSaveButton);
      
  }
  
  
  projectName.contentEditable = 'true';
  projectDescription.contentEditable = 'true';
  projectName.spellcheck = false;
  projectDescription.spellcheck = false;
  projectName.classList.add('editable');
  projectDescription.classList.add('editable');
  
  
  let range = document.createRange();
  range.selectNodeContents(projectDescription);
  range.collapse(false);
  let selection = window.getSelection();
  selection.removeAllRanges();
    selection.addRange(range);
    
    let range2 = document.createRange();
    range2.selectNodeContents(projectName);
    range2.collapse(false);
    let selection2 = window.getSelection();
    selection2.removeAllRanges();
    selection2.addRange(range2);
  }
  
  
  static handleDeleteProjectButton() {
    Storage.removeProject(DisplayController.getCurrentProject().getName());
    document.querySelector('#projects-container').innerHTML = '';
    DisplayController.loadProjects();
    DisplayController.openProject(Storage.getProjectList().getProjects()[0]);
  }
  
  static handleProjectEditSaveButton(currentProjectName) {
    const projectName = document.querySelector('.project-name');
    const projectDescription = document.querySelector('.project-description');
    Storage.editProject(currentProjectName, projectName.textContent, projectDescription.textContent);
    DisplayController.loadProjects();
    DisplayController.openProject(Storage.getProjectList().getProject(projectName.textContent));
  }
  
  static loadProjectDescription(project) {
    const projectDescription = document.querySelector('.project-description');
    projectDescription.textContent = project.getDescription();
    projectDescription.contentEditable = 'false';
    projectDescription.classList.remove('editable');
  }
  
  static loadProjectTodoList(project) {
    const todoListContainer = document.querySelector('.project-todoList-container');
    todoListContainer.textContent = '';
    project.getTodoList().forEach((todo) => {
      // Create the outer div element
      const checkboxWrapper = document.createElement('div');
      checkboxWrapper.classList.add('checkbox-wrapper');
      
      // Create the input element
      const checkboxInput = document.createElement('input');
      checkboxInput.classList.add('checkbox-input');
      checkboxInput.type = 'checkbox';
      checkboxInput.checked = todo.getCheckStatus();
      checkboxInput.style.display = 'none';
      checkboxInput.id = todo.getName();
      checkboxInput.addEventListener('click', DisplayController.handleToggleCheck);

      // Create the label element
      const checkboxLabel = document.createElement('label');
      checkboxLabel.classList.add('checkbox-label');
      checkboxLabel.setAttribute('for', todo.getName());

      // Create the first span element inside the label
      const checkboxSvgWrapper = document.createElement('span');

      // Create the svg element inside the first span
      const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgElement.setAttribute('width', '12px');
      svgElement.setAttribute('height', '9px');
      svgElement.setAttribute('viewBox', '0 0 12 9');

      // Create the polyline element inside the svg
      const polylineElement = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
      polylineElement.setAttribute('points', '1 5 4 8 11 1');

      // Append the polyline to the svg, and svg to the first span
      svgElement.appendChild(polylineElement);
      checkboxSvgWrapper.appendChild(svgElement);

      // Create the second span element inside the label
      const todoName = document.createElement('span');
      todoName.classList.add('todo-container-name');
      todoName.textContent = todo.getName();

      // Append spans to the label
      checkboxLabel.appendChild(checkboxSvgWrapper);
      checkboxLabel.appendChild(todoName);

      // Append input and label to the outer div
      checkboxWrapper.appendChild(checkboxInput);
      checkboxWrapper.appendChild(checkboxLabel);

      const todoDueDate = document.createElement('span');
      todoDueDate.classList.add('todo-container-dueDate');
      todoDueDate.textContent = todo.getDueDate();
     
      const editButton = document.createElement('img');
      editButton.classList.add('todo-container-edit-button');
      editButton.src = './img/edit-icon.svg';
      editButton.title = 'Edit Todo';
      editButton.draggable = false;
      editButton.addEventListener('click',DisplayController.handleEditTodoContainerButton);

      const deleteButton = document.createElement('img');
      deleteButton.classList.add('todo-container-delete-button');
      deleteButton.src = './img/delete-icon.svg';
      deleteButton.title = 'Delete Todo';
      deleteButton.draggable = false;
      deleteButton.addEventListener('click', DisplayController.handleDeleteTodoButton);

      const expandButton = document.createElement('img');
      expandButton.classList.add('todo-container-expand-button');
      expandButton.src = './img/expand-more-icon.svg';
      expandButton.title = 'Expand Todo';
      expandButton.draggable = false;
      expandButton.addEventListener('click', DisplayController.handleExpandTodoButton);
      
      const dragButton = document.createElement('img');
      dragButton.classList.add('todo-container-drag-button');
      dragButton.src = './img/drag-icon.svg';
      dragButton.title = 'Drag Todo';
      dragButton.draggable = false;


      const todoDescription = document.createElement('div');
      todoDescription.classList.add('todo-container-description');
      todoDescription.textContent = todo.getDescription();

      const todoContainer = document.createElement('div');      
      todoContainer.classList.add('todo-container');
      todoContainer.dataset.priority = todo.getPriority();
      todoContainer.dataset.todoName = todo.getName(); 
      todoContainer.draggable = true;

      todoContainer.append(checkboxWrapper,todoDueDate,editButton,deleteButton,expandButton,dragButton,todoDescription);

      todoListContainer.append(todoContainer);
      DisplayController.initDragAndDrop(); 
    });
  }

  static handleToggleCheck() {
    Storage.todoToggleCheckStatus(DisplayController.getCurrentProject(), this.id);
  }

  static initProjectButtons() {
    const projectButtons = document.querySelectorAll('.sidebar-project-name');
    const newProjectButton = document.querySelector('#create-new-project');
    const newTodoButton = document.querySelector('.new-todo');

    projectButtons.forEach((projectButton) => projectButton.addEventListener('click',DisplayController.handleProjectButtons));
    newProjectButton.addEventListener('click', DisplayController.createNewProject);
    newTodoButton.addEventListener('click', DisplayController.createNewTodo);
  }

  static handleProjectButtons() {
    document.querySelectorAll('.sidebar-project-name').forEach((item)=>item.classList.remove('sidebar-project-name-selected'));
    this.classList.add('sidebar-project-name-selected');
    DisplayController.openProject(Storage.getProjectList().getProject(this.textContent));
  }

  static createNewProject() {
    const existingProjectCreateContainer = document.querySelector('.project-create-container');
  
    if (!existingProjectCreateContainer) {
      const projectContainerInput = document.createElement('input');
      const saveProjectButton = document.createElement('img');
      const cancelProjectButton = document.createElement('img');
      const projectContainerDiv = document.createElement('div');
      
      projectContainerInput.type = 'text';
      saveProjectButton.src = './img/check-icon.svg';
      cancelProjectButton.src = './img/cancel-icon.svg';
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
    const projectName = document.createElement('div');
    projectName.textContent = document.querySelector('.project-container-input').value;
    
    if (projectName.textContent) {
      const outputDiv = document.createElement('div');
      const deleteProject = document.createElement('img');
      projectName.classList.add('sidebar-project-name');

      deleteProject.src = './img/delete-icon.svg';
      deleteProject.title = 'Delete Project';
      deleteProject.classList.add('sidebar-project-delete-icon');
      deleteProject.addEventListener('click',DisplayController.handleDeleteSidebarProjectButton);
      outputDiv.append(projectName, deleteProject);
      projectContainerDiv.replaceWith(outputDiv);
      outputDiv.className = 'sidebar-user-project sidebar-project-button';
      projectName.addEventListener('click', DisplayController.handleProjectButtons);
      document.querySelectorAll('.sidebar-project-name').forEach((item)=>item.classList.remove('sidebar-project-name-selected'));
      projectName.classList.add('sidebar-project-name-selected');
      Storage.addProject(new Project(projectName.textContent));
      DisplayController.openProject(Storage.getProjectList().getProject(projectName.textContent));
    }
  }

  static addProjectButtons(project) {
    const outputDiv = document.createElement('div');
    const projectName = document.createElement('div');
    
    projectName.textContent = project.getName();
    projectName.classList.add('sidebar-project-name');
    projectName.addEventListener('click', DisplayController.handleProjectButtons); 

    if (projectName.textContent !== 'Inbox' && projectName.textContent !== 'Today' && projectName.textContent !== 'This Week') {
      const deleteProject = document.createElement('img');
      deleteProject.src = './img/delete-icon.svg';
      deleteProject.title = 'Delete Project';
      deleteProject.classList.add('sidebar-project-delete-icon');
      deleteProject.addEventListener('click',DisplayController.handleDeleteSidebarProjectButton);
      outputDiv.append(projectName, deleteProject);
      outputDiv.className = 'sidebar-user-project sidebar-project-button';
    }
    else {
      outputDiv.append(projectName);
      outputDiv.className = 'sidebar-default-project sidebar-project-button';
    }
    document.getElementById('projects-container').appendChild(outputDiv); 
  }

  static handleDeleteSidebarProjectButton() {
    Storage.removeProject(Storage.getProjectList().getProject(this.previousSibling.textContent).getName());
    this.parentNode.remove();
    DisplayController.openProject(Storage.getProjectList().getProjects()[0]);
  }

  static createNewTodo() {
    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = document.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = document.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = document.querySelector('#todo-create-container-priority');
    const todoCreateContainerDueDate = document.querySelector('#todo-create-container-dueDate');
    const saveTodoButton = document.querySelector('.save-todo-button');
    const cancelTodoButton = document.querySelector('.cancel-todo-button');
    todoCreateContainerDueDate.value = format(new Date(), 'yyyy-MM-dd');
    todoCreateContainerName.focus();
    todoModal.showModal();
    
    saveTodoButton.addEventListener('click',DisplayController.handleSaveTodoButton);
    
    cancelTodoButton.addEventListener('click', function () {
      todoCreateContainerName.value = '';
      todoCreateContainerDescription.value = '';
      todoCreateContainerPriority.value = 'low';
      todoCreateContainerDueDate.value = format(new Date(), 'yyyy-MM-dd');
      todoModal.close();
    });
  }

  static handleSaveTodoButton(e) {
    let currentTodo = DisplayController.currentTodo;
    e.preventDefault();
    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = todoModal.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = todoModal.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = todoModal.querySelector('#todo-create-container-priority');
    const todoCreateContainerDueDate = todoModal.querySelector('#todo-create-container-dueDate');
    let currentProject = DisplayController.getCurrentProject();
    if (todoCreateContainerName.value === "") {
      NotificationController.showToast('Todo name must not be empty');
    }
    else {
      if (currentTodo === null) {
        if (currentProject.getTodo(todoCreateContainerName.value) !== undefined && currentProject.getTodo(todoCreateContainerName.value).getCheckStatus()===false) {
          NotificationController.showToast('Todo name already exists');
        }
        else {
          let todo = new ToDo();
          todo.setName(todoCreateContainerName.value);
          todo.setDescription(todoCreateContainerDescription.value)
          todo.setPriority(todoCreateContainerPriority.value)
          todo.setDueDate(todoCreateContainerDueDate.value)
          Storage.addTodo(currentProject,todo);
          todoModal.close();
          todoCreateContainerName.value = '';
          todoCreateContainerDescription.value = '';
          todoCreateContainerPriority.value = 'low';
          todoCreateContainerDueDate.value = format(new Date(),'yyyy-MM-dd');
        }
      }
      else {
        if (currentTodo.getName() !== todoCreateContainerName.value) {
          if (currentProject.getTodo(todoCreateContainerName.value) !== undefined && currentProject.getTodo(todoCreateContainerName.value).getCheckStatus()===false) {
            
            NotificationController.showToast('Todo name already exists');
          }
          else {
            Storage.editTodo(currentProject,currentTodo.getName(),todoCreateContainerName.value,todoCreateContainerDescription.value,todoCreateContainerPriority.value,todoCreateContainerDueDate.value);
            todoModal.close();
            todoCreateContainerName.value = '';
            todoCreateContainerDescription.value = '';
            todoCreateContainerPriority.value = 'low';
            todoCreateContainerDueDate.value = format(new Date(),'yyyy-MM-dd');
            DisplayController.currentTodo = null;
          }
        }
        else {
          Storage.editTodo(currentProject,currentTodo.getName(),todoCreateContainerName.value,todoCreateContainerDescription.value,todoCreateContainerPriority.value,todoCreateContainerDueDate.value);
          todoModal.close();
          todoCreateContainerName.value = '';
          todoCreateContainerDescription.value = '';
          todoCreateContainerPriority.value = 'low';
          todoCreateContainerDueDate.value = format(new Date(),'yyyy-MM-dd');
          DisplayController.currentTodo = null;
        }
      }
    }
    DisplayController.loadProjectTodoList(DisplayController.getCurrentProject());
  }

  static handleEditTodoContainerButton() {
    let currentProject = DisplayController.getCurrentProject();
    const currentTodo = currentProject.getTodo(this.parentNode.querySelector('.todo-container-name').textContent);
    DisplayController.currentTodo = currentTodo;
    const todoName = currentTodo.getName();
    const todoDescription = currentTodo.getDescription();
    const todoPriority = currentTodo.getPriority();
    const todoDueDate = currentTodo.getDueDate();

    const todoModal = document.querySelector('#todoModal');
    const todoCreateContainerName = todoModal.querySelector('#todo-create-container-name');
    const todoCreateContainerDescription = todoModal.querySelector('#todo-create-container-description');
    const todoCreateContainerPriority = todoModal.querySelector('#todo-create-container-priority');
    const todoCreateContainerDueDate = todoModal.querySelector('#todo-create-container-dueDate');
    const saveTodoButton = todoModal.querySelector('.save-todo-button');
    
    todoModal.showModal();
    todoCreateContainerName.value = todoName;
    todoCreateContainerDescription.value = todoDescription;
    todoCreateContainerPriority.value = todoPriority;
    todoCreateContainerDueDate.value = todoDueDate;
    
    saveTodoButton.addEventListener('click',DisplayController.handleSaveTodoButton);
  }

  static handleDeleteTodoButton() {
    Storage.removeTodo(DisplayController.getCurrentProject(),this.parentNode.children[0].textContent);
    this.parentNode.remove();
    // DisplayController.openProject(DisplayController.getCurrentProject());
  }
  
  static handleExpandTodoButton() {
    const todoDescription = this.nextElementSibling.nextElementSibling;
    if (todoDescription.classList.contains('todo-description-expanded')){
      todoDescription.classList.remove('todo-description-expanded');
      todoDescription.classList.add('todo-description-hidden');
    } else {
      todoDescription.classList.remove('todo-description-hidden');
      todoDescription.classList.add('todo-description-expanded');
    } 
  }
  
  static initDragAndDrop() {
  const todoContainers = document.querySelectorAll('.todo-container');
  
  todoContainers.forEach((todoContainer) => {
    todoContainer.addEventListener('dragstart', DisplayController.handleDragStart);
    todoContainer.addEventListener('dragover', DisplayController.handleDragOver);
    todoContainer.addEventListener('drop', DisplayController.handleDrop);
  });
  }

  static handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.todoName);
    e.target.classList.add('dragging');
  }

  static handleDragOver(e) {
    e.preventDefault();
  }

  static handleDrop(e) {
  e.preventDefault();
  const todoName = e.dataTransfer.getData('text/plain');
  const droppedContainer = document.querySelector(`[data-todo-name="${todoName}"]`);
  
  if (droppedContainer !== this) {
    const containerParent = this.parentElement;
    const draggedIndex = Array.from(containerParent.children).indexOf(droppedContainer);
    const dropIndex = Array.from(containerParent.children).indexOf(this);

    if (dropIndex < draggedIndex) {
      console.log("Drop index is less than pick index");
      containerParent.insertBefore(droppedContainer, this);
    } else {
      containerParent.insertBefore(droppedContainer, this.nextSibling);
    }
    // Update the project's todo list
    const currentProject = DisplayController.getCurrentProject();
    const updatedTodoList = [...currentProject.getTodoList()];
    const movedTodo = updatedTodoList.find(todo => todo.getName() === todoName);
    
    updatedTodoList.splice(updatedTodoList.indexOf(movedTodo), 1);
    updatedTodoList.splice(Array.from(containerParent.children).indexOf(droppedContainer), 0, movedTodo);
    currentProject.setTodoList(updatedTodoList);

    // Update the project data in Storage
    const projectList = Storage.getProjectList();
    const updatedProjects = projectList.getProjects().map(project => {
      if (project.getName() === currentProject.getName()) {
        return currentProject;
      }
      return project;
    });
    projectList.setProjects(updatedProjects);
    Storage.saveProjectList(projectList);
  }
    e.target.classList.remove('dragging');
}






}
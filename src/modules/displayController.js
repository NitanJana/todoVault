import ToDo from "./todo";
import Project from "./project";
import ProjectList from "./projectList";

let list = new ProjectList();

export default class DisplayController {
  static loadHomePage() {
    this.openProject(list.getProjects()[0]);
    this.initProjectButtons();
  }

  static openProject(project) {
    this.loadProjectName(project);
    this.loadProjectDescription(project);    
    this.loadProjectTodos(project);
  }
  
  static loadProjectName(project) {
    document.querySelector('.project-name').textContent = project.getName();
  }
  
  static loadProjectDescription(project) {
    document.querySelector('.project-description').textContent = project.getDescription();
  }

  static loadProjectTodos(project) {
    const todosContainer = document.querySelector('.project-todos-container');
    todosContainer.textContent = '';
    project.getTodos().forEach((todo) => {
      const tempTodo = document.createElement('div');
      tempTodo.textContent = todo.getTitle();
      todosContainer.appendChild(tempTodo);
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

  static handleProjectButtons(e) {
    console.log(this.textContent);
    DisplayController.openProject(list.getProject(this.textContent));
  }
  
  static createNewProject(e) {
    
    let input = document.createElement('input');
    let saveButton = document.createElement('button');
    let removeButton = document.createElement('button');
    let containerDiv = document.createElement('div');
    
    input.type = 'text';
    saveButton.textContent = 'Save';
    removeButton.textContent = 'Remove';
    containerDiv.classList.add('container');
    containerDiv.append(input,saveButton,removeButton);
    document.getElementById('projects-container').appendChild(containerDiv);    
    input.focus();
    
    saveButton.addEventListener('click', function() {
      let text = input.value;
      let outputDiv = document.createElement('div');
      outputDiv.textContent = text;
      containerDiv.replaceWith(outputDiv);
      outputDiv.className = 'sidebar-user-project project-button';
      outputDiv.addEventListener('click',DisplayController.handleProjectButtons)
      list.addProject(new Project(text));
      console.log(list.getProjects());
    });
    
    removeButton.addEventListener('click', function() {
      containerDiv.remove();
    }); 
  }

  static createNewTodo(e) {
    let input = document.createElement('input');
    let saveButton = document.createElement('button');
    let removeButton = document.createElement('button');
    let containerDiv = document.createElement('div');
    
    input.type = 'text';
    saveButton.textContent = 'Save';
    removeButton.textContent = 'Remove';
    containerDiv.classList.add('container');
    containerDiv.append(input,saveButton,removeButton);
    document.querySelector('.project-todos-container').appendChild(containerDiv);    
    input.focus();
    
    saveButton.addEventListener('click', function() {
      let text = input.value;
      let outputDiv = document.createElement('div');
      outputDiv.textContent = text;
      containerDiv.replaceWith(outputDiv);
      list.getProject(document.querySelector('.project-name').textContent).addTodo(text);
    });
    
    removeButton.addEventListener('click', function() {
      containerDiv.remove();
    }); 
  }

 

}
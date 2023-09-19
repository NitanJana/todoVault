import Project from "./project";
import ProjectList from "./projectList";

let list = new ProjectList();

export default class DisplayController {
  static loadHomePage() {
    this.openProject(new Project('Inbox'));
    this.initProjectButtons();
  }

  static openProject(project) {
    document.querySelector('.project-name').textContent = project.getName();
  }

  static initProjectButtons() {
    const projectButtons = document.querySelectorAll('.project-button');
    const newProjectButton = document.querySelector('.new-project');

    projectButtons.forEach((projectButton) => projectButton.addEventListener('click',DisplayController.handleProjectButtons));
    newProjectButton.addEventListener('click', DisplayController.createNewProject);
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

 

}
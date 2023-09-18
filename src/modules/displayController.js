import Project from "./project";

export default class displayController {
  static loadHomePage() {
    this.openProject('Inbox');
    this.initProjectButtons();
  }

  static openProject(projectName) {
    const projectNameDest = document.querySelector('.project-name');
    projectNameDest.textContent = projectName;
  }

  static initProjectButtons() {
    const projectButtons = document.querySelectorAll('.project-button');
    const newProjectButton = document.querySelector('.new-project');

    projectButtons.forEach((projectButton) => projectButton.addEventListener('click',this.handleProjectButtons));
    newProjectButton.addEventListener('click', this.handleNewProjectButton);
  }

  static handleProjectButtons(e) {
    displayController.openProject(this.textContent);
  }
  
  static handleNewProjectButton(e) {
    
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
      outputDiv.addEventListener('click',displayController.handleProjectButtons)
    });
    
    removeButton.addEventListener('click', function() {
      containerDiv.remove();
    }); 
  }

 

}
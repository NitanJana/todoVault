import Project from "./project";

export default class ProjectList {
  constructor() {
    this.projectList = [];
    this.projectList.push(new Project('Inbox'));
    this.projectList.push(new Project('Today'));
    this.projectList.push(new Project('This Week'));
  }

  setProjectList(projectList) {
    this.projectList = projectList;
  }

  getProjectList() {
    return this.projectList;
  }

  addProject(project) {
    this.projectList.push(project);
  }

  getProject(projectName) {
    return this.projectList.find((project) => project.getName() === projectName);
  }

  getCurrentProject() {
    return this.getProject(document.querySelector('.project-name').textContent);
  }
}
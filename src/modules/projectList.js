import Project from "./project";

export default class ProjectList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('Inbox'));
    this.projects.push(new Project('Today'));
    this.projects.push(new Project('This Week'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  addProject(project) {
    this.projects.push(project);
  }

  removeProject(projectName) {
    this.setProjects(this.projects.filter(item => item !== this.getProject(projectName)));
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  
}
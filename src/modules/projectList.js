import Project from "./project";

export default class ProjectList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project('Inbox','Where todos find their starting line.'));
    this.projects.push(new Project('Today','The todo circus of the day!'));
    this.projects.push(new Project('This Week','Where weekly todos throw a party.'));
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
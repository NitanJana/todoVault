import Project from "./project";

export default class ProjectList {
  constructor() {
    this.projectList = [];
    this.projectList.push(new Project('Inbox'));
    this.projectList.push(new Project('Today'));
    this.projectList.push(new Project('This Week'));
  }

  setProjects(projectList) {
    this.projectList = projectList;
  }

  getProjects() {
    return this.projectList;
  }

  addProject(project) {
    this.projectList.push(project);
  }

  getProject(projectName) {
    return this.projectList.find((project) => project.getName() === projectName)
  }
}
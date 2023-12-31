export default class ToDo {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.check = false;
    this.projectName = null;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setProjectName(projectName) {
    this.projectName = projectName;
  }
  
  getProjectName() {
    return this.projectName;
  }

  setDescription(value) {
    this.description = value;
  }

  getDescription() {
    return this.description;
  }

  setDueDate(value) {
    this.dueDate = value;
  }

  getDueDate() {
    return this.dueDate;
  }

  setPriority(value) {
    this.priority = value;
  }
  
  getPriority() {
    return this.priority;
  }

  getCheckStatus() {
    return this.check;
  }

  toggleCheckStatus() {
    this.check = !this.check;
  }
}

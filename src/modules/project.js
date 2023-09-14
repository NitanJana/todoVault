export default class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  setName(value) {
    this.name = value;
  }

  getName() {
    return this.name;
  }

  setTodos(todos) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }
}
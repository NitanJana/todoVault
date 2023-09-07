import ToDo from "./modules/todo";
const todo = new ToDo('hi', 'a message', '23/10/2023', 'high');
console.log(todo.getTitle(),todo.getDescription(),todo.getDueDate(),todo.getPriority());
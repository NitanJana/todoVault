import ToDo from "./todo";
import Project from "./project";
import ProjectList from "./projectList";
import { format, addDays, eachDayOfInterval } from 'date-fns';

export default class Storage{
  static saveProjectList(data) {
    localStorage.setItem('ProjectList', JSON.stringify(data));
  }

  static getProjectList() {
    const projectList = Object.assign(
      new ProjectList(),
      JSON.parse(localStorage.getItem('ProjectList'))
    );
    projectList.setProjects(
      projectList.getProjects().map((project) => Object.assign(new Project(), project))
    );
    projectList.getProjects().forEach((project) => project.setTodoList(project.getTodoList().map((todo) => Object.assign(new ToDo(), todo))));
    return projectList;
  }

  static addProject(project) {
    const projectList = Storage.getProjectList();
    projectList.addProject(project);
    Storage.saveProjectList(projectList);
  }
  static removeProject(projectName) {
    const projectList = Storage.getProjectList();
    projectList.removeProject(projectName);
    Storage.saveProjectList(projectList);
  }
  static addTodo(project, todo) {
    const projectList = Storage.getProjectList();
    projectList.getProject(project.getName()).addTodo(todo);
    Storage.saveProjectList(projectList);
  }
  static removeTodo(project, todo) {
    const projectList = Storage.getProjectList();
    projectList.getProject(project.getName()).removeTodo(todo);
    Storage.saveProjectList(projectList);
  }
  static editProject(projectName,newName,newDescription) {
    const projectList = Storage.getProjectList();
    let tempProject = projectList.getProject(projectName);
    tempProject.setName(newName);
    tempProject.setDescription(newDescription);
    Storage.saveProjectList(projectList);
  }
  static editTodo(project, todoName,newName,newDescription,newPriority,newDueDate) {
    const projectList = Storage.getProjectList();
    let tempTodo = projectList.getProject(project.getName()).getTodo(todoName);
    tempTodo.setName(newName);
    tempTodo.setDescription(newDescription);
    tempTodo.setPriority(newPriority);
    tempTodo.setDueDate(newDueDate);
    Storage.saveProjectList(projectList);
  }
  static todoToggleCheckStatus(project, todoName) {
    const projectList = Storage.getProjectList();
    let tempTodo = projectList.getProject(project.getName()).getTodo(todoName);
    tempTodo.toggleCheckStatus();
    Storage.saveProjectList(projectList);
  }
  static loadTodayTodoList() {
    const todayDate = format(new Date(), 'yyyy-MM-dd');
    const projectList = Storage.getProjectList();
    const todayProject = projectList.getProject('Today');
    const tomorrowProject = projectList.getProject('Tomorrow');
    const weekProject = projectList.getProject('This Week');
    todayProject.getTodoList().forEach((todo) => {
      if (todo.getProjectName() !== null) { 
        todayProject.removeTodo(todo.getName());
      }
    });
    projectList.getProjects().forEach((project) => {
      if (project !== weekProject && project !== tomorrowProject && project !== todayProject) {
        
        project.getTodoList().forEach((todo) => {
          if (todo.getDueDate() === todayDate) {
            if (todayProject.getTodo(todo.getName()) === undefined) {
              todo.setProjectName(project.getName());
              todayProject.addTodo(todo);
            } else {
              todo.setProjectName('Today');
              todayProject.removeTodo(todo);
            }
          }
        });
      }
    });
    
    Storage.saveProjectList(projectList);
  }
  static loadTomorrowTodoList() {
    const tomorrowDate = format(addDays(new Date(), 1), 'yyyy-MM-dd');
    const projectList = Storage.getProjectList();
    const todayProject = projectList.getProject('Today');
    const tomorrowProject = projectList.getProject('Tomorrow');
    const weekProject = projectList.getProject('This Week');
    tomorrowProject.getTodoList().forEach((todo) => {
      if (todo.getProjectName() !== null) { 
        tomorrowProject.removeTodo(todo.getName());
      }
    });
    projectList.getProjects().forEach((project) => {
      if (project !== weekProject && project !== tomorrowProject && project !== todayProject) {
        
        project.getTodoList().forEach((todo) => {
          if (todo.getDueDate() === tomorrowDate) {
            if (tomorrowProject.getTodo(todo.getName()) === undefined) {
              todo.setProjectName(project.getName());
              tomorrowProject.addTodo(todo);
            } else {
              todo.setProjectName('Tomorrow');
              tomorrowProject.removeTodo(todo);
            }
          }
        });
      }
    });
    
    Storage.saveProjectList(projectList);
  }
  static loadWeeklyTodoList() {
    // Get array of the next 7 dates starting from today
    const weekDates = eachDayOfInterval({ start: new Date(), end: addDays(new Date(), 7) }).map((date) => format(date, 'yyyy-MM-dd'));

    const projectList = Storage.getProjectList();
    const todayProject = projectList.getProject('Today');
    const tomorrowProject = projectList.getProject('Tomorrow');
    const weekProject = projectList.getProject('This Week');
    weekProject.getTodoList().forEach((todo) => {
      if (todo.getProjectName() !== null) { 
        weekProject.removeTodo(todo.getName());
      }
    });

    projectList.getProjects().forEach((project) => {
      if (project !== weekProject && project !== tomorrowProject && project !== todayProject) {
        
        project.getTodoList().forEach((todo) => {
          if (weekDates.includes(todo.getDueDate())) {
            if (weekProject.getTodo(todo.getName()) === undefined) {
              todo.setProjectName(project.getName());
              weekProject.addTodo(todo);
            } else {
              todo.setProjectName('This Week');
              weekProject.removeTodo(todo);
            }
          }
        });
      }
      });
    Storage.saveProjectList(projectList);
  }
}
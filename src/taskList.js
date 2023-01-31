function taskItem(taskName) {
  return {
    taskName: taskName,
  };
}

function projectItem(name) {
  return {
    projectName: name,
    projectTaskList: [],
  };
}

export let allTasksList = [
  {
    taskName: "Default Task",
    taskDescription: "This is a default task.",
    dueDate: "Today",
    priority: "Soon",
  },
];

export let projectList = [
  
];

export { taskItem, projectItem };

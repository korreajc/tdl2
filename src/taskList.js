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
  },
];

export let projectList = [
  {
    projectName: "Default Project",
    projectTaskList: [
      {
        taskName: "Default Task",
      },
    ],
  },
];

export { taskItem, projectItem };

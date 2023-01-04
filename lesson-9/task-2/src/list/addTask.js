import { setItem } from './storage';
import { renderTasks } from './render';
import { createTask, getTasksList } from './tasksGateway';

export const addNewTask = () => {
  const taskInput = document.querySelector('.task-input');
  const text = taskInput.value;

  if (!text) {
    return;
  }

  taskInput.value = '';
  // const tasksList = getItem('tasksList') || [];

  const newTask = {
    text,
    done: false,
    date: new Date(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. Write data to db
// 3. Read new data from server
// 4. Save new data to front end storage
// 5. Update UI based on new data

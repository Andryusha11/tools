import { addNewTask } from './addTask.js';
import { onToggleTask } from './updateTask.js';

export const initHandlers = () => {
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onToggleTask);

  const createNewTaskButton = document.querySelector('.create-task-btn');
  createNewTaskButton.addEventListener('click', addNewTask);
};

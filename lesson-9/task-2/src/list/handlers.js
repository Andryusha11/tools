import { addNewTask } from './addTask';
import { onToggleTask } from './updateTask';

export const initHandlers = () => {
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onToggleTask);

  const createNewTaskButton = document.querySelector('.create-task-btn');
  createNewTaskButton.addEventListener('click', addNewTask);
};

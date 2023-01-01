import { initHandlers } from './handlers.js';
import { renderTasks } from './render.js';
import { setItem } from './storage.js';
import { getTasksList } from './tasksGateway.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });

  initHandlers();
});

const onStorageChange = (event) => {
  if (event.key !== 'tasksList') return;
  renderTasks();
};

window.addEventListener('storage', onStorageChange);

//1. Get data from server
//2. Save data to front-end server
//3.

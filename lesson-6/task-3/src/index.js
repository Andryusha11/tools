import { initHandlers } from './list/handlers.js';
import { renderTasks } from './list/render.js';
import { setItem } from './list/storage.js';
import { getTasksList } from './list/tasksGateway.js';
import './index.scss';

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

import { setItem, getItem } from './storage.js';
import { renderTasks } from './render.js';
import { getTasksList, updateTask, deleteTask } from './tasksGateway.js';

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');
  const isCross = e.target.classList.contains('list-item__delete-btn');

  const taskId =
    e.target.dataset.id ||
    e.target.closest('li').querySelector(`[data-id]`).dataset.id;

  if (isCross) {
    deleteTask(taskId)
      .then(() => getTasksList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderTasks();
      });
  }

  if (!isCheckbox) {
    return;
  }

  const tasksList = getItem('tasksList');
  const { text, date } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;

  console.log(taskId);

  const updatedTask = {
    text,
    date,
    done,
  };
  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

//1. Prepare data
//2. Update data in db
//3. Read new data from server
//4. Save new data to front end storage
//5. Update UI based on new data

import { getItem } from './storage';
import './list-item.scss';

export const renderTasks = () => {
  const listElem = document.querySelector('.list');
  const tasksList = getItem('tasksList') || [];
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done || new Date(b.date) - new Date(a.date))
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list-item', 'list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list-item__checkbox');
      checkbox.setAttribute('data-id', id);
      if (done) {
        listItemElem.classList.add('list-item_done');
      }

      const textElem = document.createElement('span');
      textElem.classList.add('list-item__text');
      textElem.textContent = text;

      const deleteBtnElem = document.createElement('button');
      deleteBtnElem.classList.add('list-item__delete-btn');
      listItemElem.append(checkbox, textElem, deleteBtnElem);

      return listItemElem;
    });
  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};

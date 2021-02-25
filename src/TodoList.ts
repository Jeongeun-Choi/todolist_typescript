import TodoItem from './TodoItem';
import { store } from './store';
import { storeChannel } from './store/storeChannel';
import { StoreChannelType } from '../typings/StoreType';

class TodoList {
  private todoListElement: HTMLUListElement;

  constructor() {
    this.todoListElement = document.querySelector('ul') as HTMLUListElement;
    this.init();
  }

  init(): void {
    this.render();
    this.initEvent();
    this.todoListObserver();
  }

  initEvent(): void {
    this.todoListElement.addEventListener('click', this.deleteItem);
  }

  render(): void {
    const { todoList } = store.getState();

    this.todoListElement.innerHTML = todoList.reduce((acc, todo): string => {
      const item = new TodoItem(todo);
      return (acc += item.render());
    }, ``);
  }

  deleteItem(e): void {
    const { target } = e;
    if (target.tagName !== 'BUTTON') return;

    const liElement: HTMLLIElement = target.closest('li');
    const id = liElement.dataset.key as string;
    store.deleteTodoList(id);
  }

  todoListObserver(): void {
    storeChannel.subscribe(StoreChannelType.ADD_TODOITEM, this.render, this);
    storeChannel.subscribe(StoreChannelType.DELETE_TODOITEM, this.render, this);
  }
}

export default TodoList;

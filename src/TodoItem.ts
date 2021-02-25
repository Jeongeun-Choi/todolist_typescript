import { todoItem } from '../typings/TodoItemType';

class TodoItem {
  private todo: todoItem;

  constructor(item: todoItem) {
    this.todo = item;
  }

  render(): string {
    return `<li data-key=${this.todo.id}>${this.todo.title}<button>❌</button></li>`;
  }
}

export default TodoItem;

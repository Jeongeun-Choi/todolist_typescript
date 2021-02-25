import { todoItem } from '../../typings/TodoItemType';
import { storeChannel } from './storeChannel';
import { StoreChannelType } from '../../typings/StoreType';

class Store {
  private state: { maxId: number; todoList: todoItem[] };

  constructor() {
    this.state = { maxId: 0, todoList: [] };
  }

  getState(): { maxId: number; todoList: todoItem[] } {
    return this.state;
  }

  addTodoList(item: { title: string; done: boolean }): void {
    const { maxId, todoList } = this.state;
    const newMaxId = maxId + 1;
    const newItem = { id: newMaxId, ...item };
    const newTodoList = [...todoList, newItem];

    this.state = { maxId: newMaxId, todoList: newTodoList };
    storeChannel.publish(StoreChannelType.ADD_TODOITEM, newTodoList);
  }

  deleteTodoList(id: string): void {
    const { todoList } = this.state;
    const filterArray = todoList.filter(item => item.id !== Number(id));

    this.state = { ...this.state, todoList: filterArray };
    storeChannel.publish(StoreChannelType.DELETE_TODOITEM, filterArray);
  }
}

export const store = new Store();

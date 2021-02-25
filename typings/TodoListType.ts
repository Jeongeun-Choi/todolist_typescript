import { todoItem } from './TodoItemType';

export interface TodoListType {
  todoList: todoItem[];
  maxId: number;
  todoListElement: HTMLUListElement | null;
}

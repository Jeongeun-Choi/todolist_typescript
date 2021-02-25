import Input from './Input';
import TodoList from './TodoList';

class Main {
  private appElement: HTMLDivElement;

  constructor() {
    this.appElement = document.querySelector('#app') as HTMLDivElement;

    this.init();
  }

  init(): void {
    new Input(this.appElement);
    new TodoList();
  }
}

new Main();

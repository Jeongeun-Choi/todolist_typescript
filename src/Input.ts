import { store } from './store';

class Input {
  private divElement: HTMLDivElement;
  private inputElement: HTMLInputElement | null;
  private buttonElement: HTMLButtonElement | null;
  private itemTitle: string;

  constructor(divElement: HTMLDivElement) {
    this.divElement = divElement;
    this.inputElement = null;
    this.buttonElement = null;
    this.itemTitle = '';

    this.init();
  }

  init(): void {
    this.render();
    this.initElement();
    this.initEvent();
  }

  addItem(): void {
    const item = { title: this.itemTitle, done: false, color: '#000000' };
    store.addTodoList(item);
  }

  changeInput(e): void {
    this.itemTitle = e.target.value;
  }

  render(): void {
    this.divElement.innerHTML += `
      <div class="input_wrap">
        <input id="todo_input" placeholder="할 일을 입력하세요" />
        <button id="todo_button">확인</button>
      </div>
      <ul id='todolist'></ul>`;
  }

  initElement(): void {
    this.inputElement = document.querySelector(
      '#todo_input'
    ) as HTMLInputElement;
    this.buttonElement = document.querySelector(
      '#todo_button'
    ) as HTMLButtonElement;
  }

  initEvent(): void {
    this.buttonElement &&
      this.buttonElement.addEventListener('click', this.addItem.bind(this));
    this.inputElement &&
      this.inputElement.addEventListener('input', this.changeInput.bind(this));
  }
}

export default Input;

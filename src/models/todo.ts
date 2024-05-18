// type===interface===class egulo same kaj kore

class Todo{
  id: string;
  text: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;

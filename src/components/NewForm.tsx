import { useRef } from "react";

const NewForm: React.FC <{onAddTodo: (text:string) => void}> = (props) => {
  const todoTextInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInput.current!.value;
    if (enteredText.trim().length ===0){
        // throw an error
        return;
    }

    props.onAddTodo(enteredText);


  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewForm;

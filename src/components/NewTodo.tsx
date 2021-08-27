import React from "react";
import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const toDoText = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredtext = toDoText.current!.value;

    if (enteredtext?.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredtext);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={toDoText} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

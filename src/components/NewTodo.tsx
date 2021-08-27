import React from "react";
import { useRef } from "react";

const NewTodo = () => {
  const toDoText = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredtext = toDoText.current?.value;
  };

  return (
    <form>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={toDoText} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

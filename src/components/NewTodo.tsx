import React from "react";
import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-contect";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const toDoText = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredtext = toDoText.current!.value;

    if (enteredtext?.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredtext);
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

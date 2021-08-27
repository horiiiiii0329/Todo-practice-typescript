import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-contect";
import { useContext } from "react";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <div>
      <ul>
        {todosCtx.items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            deleteHandler={todosCtx.removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;

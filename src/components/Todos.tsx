import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]; deleteHandler: (id: string) => void }> =
  (props) => {
    return (
      <div>
        <ul>
          {props.items.map((item) => (
            <TodoItem
              key={item.id}
              text={item.text}
              deleteHandler={props.deleteHandler.bind(null, item.id)}
            />
          ))}
        </ul>
      </div>
    );
  };

export default Todos;

import Todo from "../models/Todo";

const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: () => void;
  removetodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

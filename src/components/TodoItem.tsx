const TodoItem: React.FC<{ text: string; deleteHandler: () => void }> = (
  props
) => {
  return <li onClick={props.deleteHandler}>{props.text}</li>;
};

export default TodoItem;

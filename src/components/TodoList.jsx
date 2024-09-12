import { useSelector } from "react-redux";
import Todo from "./Todo.jsx";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default TodoList;

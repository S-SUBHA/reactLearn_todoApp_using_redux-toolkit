import { useSelector } from "react-redux";
import Todo from "./Todo.jsx";

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 w-[95%] sm:w-[90%] my-6 mx-auto">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default TodoList;

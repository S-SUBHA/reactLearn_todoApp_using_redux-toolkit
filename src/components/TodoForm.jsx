import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo.slice.js";
import { addIcon } from "../assets/icons.jsx";

function TodoForm() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const createTodo = (e) => {
    e.preventDefault();
    if (input === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <section className="w-[90%] sm:w-4/5 my-6 mx-auto">
        <form className="flex justify-center" onSubmit={(e) => createTodo(e)}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a todo..."
            className="text-black flex-grow p-4 rounded-l-xl bg-amber-100"
          />
          <button
            type="submit"
            className="py-2 px-8 rounded-r-xl bg-amber-400 hover:bg-amber-300 flex justify-center items-center"
          >
            {addIcon}
          </button>
        </form>
      </section>
    </>
  );
}

export default TodoForm;

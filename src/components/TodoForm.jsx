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
      <section
        className=""
        style={{
          display: "grid",
          // gridTemplateColumns: "1fr repeat(1, min(100% - 20rem, 80rem)) 1fr",
          gridTemplateColumns: "repeat(12, 1fr)",
          // gap: "30px"
        }}
      >
        <form
          style={{
            // gridColumnStart: 2,
            gridColumn: "2 / -2",
            display: "flex",
          }}
          className="m-4 mb-8"
          onSubmit={(e) => createTodo(e)}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a todo..."
            className="text-black flex-grow p-4 rounded-l-xl bg-amber-100"
          />
          <button
            type="submit"
            style={{}}
            className="py-2 px-8 rounded-r-xl bg-amber-400 flex justify-center items-center hover:bg-amber-300"
          >
            {addIcon}
          </button>
        </form>
      </section>
    </>
  );
}

export default TodoForm;

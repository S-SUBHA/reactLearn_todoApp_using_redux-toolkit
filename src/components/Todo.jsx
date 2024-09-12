/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { toggleCompleted } from "../features/todo.slice.js";
import { useEffect, useRef, useState } from "react";
import {
  CancelButton,
  DeleteButton,
  EditButton,
  SaveButton,
} from "./TodoButtons.jsx";

function Todo({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [input, setInput] = useState(todo.task);

  const taskRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    taskRef.current?.focus();
  }, [isEditable]);

  return (
    <section
      className="m-4"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
      }}
    >
      <div
        style={{
          gridColumn: "3 / -3",
        }}
        className="h-16 rounded-xl grid grid-cols-12 relative"
      >
        <div
          style={{
            // display: "none",
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            left: "4.17%",
            gridColumn: 1 / 2,
          }}
          className={`${
            todo.completed
              ? `bg-emerald-400 hover:bg-blue-500`
              : `bg-amber-400 hover:bg-blue-500`
          } absolute top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
          onClick={() => dispatch(toggleCompleted(todo.id))}
        ></div>

        <textarea
          type="text"
          value={input}
          className={`text-black rounded-full pl-8 p-4 mr-1 text-xl max-h-min min-h-min ${
            todo.completed && "line-through"
          }`}
          style={{
            gridColumn: "2/ -3",
            scrollbarWidth: "none",
            resize: "none",
          }}
          readOnly={!isEditable}
          disabled={todo.completed}
          onChange={(e) => setInput(e.target.value)}
          ref={taskRef}
        />

        {isEditable ? (
          <SaveButton
            key={todo.id + "saveButton"}
            todo={todo}
            input={input}
            setIsEditable={setIsEditable}
          />
        ) : (
          <EditButton
            key={todo.id + "editButton"}
            todo={todo}
            setIsEditable={setIsEditable}
          />
        )}

        {isEditable ? (
          <CancelButton
            key={todo.id + "cancelButton"}
            todo={todo}
            setInput={setInput}
            setIsEditable={setIsEditable}
          />
        ) : (
          <DeleteButton key={todo.id + "deleteButton"} todo={todo} />
        )}
      </div>
    </section>
  );
}

export default Todo;

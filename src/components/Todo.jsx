/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import {
  CancelButton,
  CompletedButton,
  DeleteButton,
  EditButton,
  SaveButton,
} from "./TodoButtons.jsx";

import "./todo.css";

function Todo({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [input, setInput] = useState(todo.task);

  const taskRef = useRef(null);

  useEffect(() => {
    taskRef.current?.focus();
  }, [isEditable]);

  return (
    <section className="custom_css">
      <div className="c_editBtn flex justify-center items-center">
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
      </div>

      <div className="c_deleteBtn flex justify-center items-center">
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

      <div className="c_completedBtn flex justify-center items-center">
        <CompletedButton
          key={todo.id + "completedButton"}
          todo={todo}
          isEditable={isEditable}
        />
      </div>

      <textarea
        type="text"
        className={`${todo.completed && `line-through`}`}
        value={input}
        readOnly={!isEditable}
        disabled={todo.completed}
        onChange={(e) => setInput(e.target.value)}
        ref={taskRef}
      />
    </section>
  );
}

export default Todo;

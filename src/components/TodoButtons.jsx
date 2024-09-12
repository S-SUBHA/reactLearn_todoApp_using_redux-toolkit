import { useDispatch } from "react-redux";
import { cancelIcon, deleteIcon, editIcon, saveIcon } from "../assets/icons";
import { removeTodo, updateTodo } from "../features/todo.slice";

/* eslint-disable react/prop-types */
export const EditButton = ({ todo, setIsEditable }) => {
  return (
    <button
      className={`${
        todo.completed ? "bg-neutral-500" : "bg-blue-500 hover:bg-blue-400"
      } flex justify-center items-center rounded-full m-1`}
      style={{
        gridColumn: "-3/ -2",
      }}
      onClick={() => setIsEditable((prev) => !prev)}
      disabled={todo.completed}
    >
      {editIcon}
    </button>
  );
};

export const SaveButton = ({ todo, input, setIsEditable }) => {
  const dispatch = useDispatch();

  const handleSave = () => {
    setIsEditable((prev) => !prev);
    dispatch(updateTodo({ id: todo.id, todo: { ...todo, task: input } }));
  };

  return (
    <>
      <button
        className="bg-emerald-400 rounded-full m-1 flex justify-center items-center hover:bg-emerald-300"
        style={{
          gridColumn: "-3/ -2",
        }}
        onClick={() => handleSave()}
      >
        {saveIcon}
      </button>
    </>
  );
};

export const DeleteButton = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="bg-red-600 rounded-full flex justify-center items-center m-1 hover:bg-red-500"
      style={{
        gridColumn: "-2/ -1",
      }}
      onClick={() => dispatch(removeTodo(todo.id))}
    >
      {deleteIcon}
    </button>
  );
};

export const CancelButton = ({ todo, setInput, setIsEditable }) => {
  const handleCancel = () => {
    setInput(todo.task);
    setIsEditable((prev) => !prev);
  };

  return (
    <button
      className={`bg-blue-500 flex justify-center items-center rounded-full m-1 hover:bg-blue-400`}
      style={{
        gridColumn: "-2/ -1",
      }}
      onClick={() => handleCancel()}
    >
      {cancelIcon}
    </button>
  );
};

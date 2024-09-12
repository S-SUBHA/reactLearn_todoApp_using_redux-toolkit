import { useDispatch } from "react-redux";
import { cancelIcon, completedIcon, deleteIcon, editIcon, saveIcon } from "../assets/icons";
import {
  removeTodo,
  toggleCompleted,
  updateTodo,
} from "../features/todo.slice";

/* eslint-disable react/prop-types */
export const EditButton = ({ todo, setIsEditable }) => {
  return (
    <button
      className={`flex justify-center items-center ${
        todo.completed
          ? "border-neutral-500"
          : "border-blue-500 hover:border-blue-400"
      } h-full w-full rounded-full m-1 border-2 bg-gradient-to-br from-neutral-700 to-transparent hover:bg-neutral-700`}
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
        className="flex justify-center items-center border-emerald-400  hover:border-emerald-300 h-full w-full rounded-full m-1 border-2 bg-gradient-to-br from-neutral-700 to-transparent hover:bg-neutral-700"
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
      className="flex justify-center items-center border-red-600  hover:border-red-500 h-full w-full rounded-full m-1 border-2 bg-gradient-to-br from-neutral-700 to-transparent hover:bg-neutral-700"
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
      className={`flex justify-center items-center border-blue-500 hover:border-blue-400 h-full w-full rounded-full m-1 border-2 bg-gradient-to-br from-neutral-700 to-transparent hover:bg-neutral-700`}
      onClick={() => handleCancel()}
    >
      {cancelIcon}
    </button>
  );
};

export const CompletedButton = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={`flex justify-center items-center ${
        todo.completed
          ? `border-emerald-400 hover:border-emerald-300`
          : `border-yellow-400  hover:border-yellow-300`
      } h-full w-full rounded-full m-1 border-2 bg-gradient-to-br from-neutral-700 to-transparent hover:bg-neutral-700`}
      onClick={() => dispatch(toggleCompleted(todo.id))}
    >
      {completedIcon}
    </button>
  );
};

export const getFromLocalStorage = () => {
  let todos = JSON.parse(localStorage.getItem("todos"));

  // console.log(typeof todos);
  // console.log(todos);

  if (todos && Array.isArray(todos) && todos.length > 0) return todos;
  return [];
};

export const setToLocalStorage = (key, value) => {
  if (value)
    if (value.length > 0) localStorage.setItem(key, JSON.stringify(value));
    else localStorage.clear();
};

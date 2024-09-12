import { Provider } from "react-redux";
import TodoForm from "./components/TodoForm";
import { store } from "./store/store.js";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <Provider store={store}>
      <h1 className="bg-amber-400 text-4xl text-center p-4 m-4 rounded-xl text-black">
        What&apos;s on your mind ?...
      </h1>
      <TodoForm />
      <TodoList />
    </Provider>
  );
}

export default App;

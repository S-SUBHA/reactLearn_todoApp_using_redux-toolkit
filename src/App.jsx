import { Header, TodoForm, TodoList } from "./components";

function App() {
  return (
    <>
      <Header className="w-full pt-2 bg-[#21212180]" />
      <main className="relative w-full">
        <section className="sticky top-0 left-0 z-10 pt-0.5">
          <TodoForm />
        </section>
        <TodoList />
      </main>
    </>
  );
}

export default App;

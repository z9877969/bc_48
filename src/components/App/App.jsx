// import Counter from "../Counter/Counter";
import { useState } from "react";
import { ChangeBgProvider } from "../../context/ChangeBgProvider";
import TodoPage from "../TodoPage/TodoPage";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen((p) => !p)}>
        Click - {`${isOpen}`}
      </button>
      <ChangeBgProvider>
        <TodoPage />
      </ChangeBgProvider>
      {/* <Counter /> */}
    </>
  );
};

export default App;

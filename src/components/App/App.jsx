import { Navigate, Route, Routes } from "react-router-dom";
import MainNav from "../MainNav/MainNav";
import Counter from "pages/CounterPage";
import TodoPage from "pages/TodoPage";

const App = () => {
  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<Navigate to={"/counter"} />} />
      </Routes>
    </>
  );
};

export default App;

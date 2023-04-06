import { Navigate, Route, Routes } from "react-router-dom";
import Counter from "../Counter/Counter";
import MainNav from "../MainNav/MainNav";
import TodoPage from "../TodoPage/TodoPage";

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

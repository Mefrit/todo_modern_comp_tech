import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import UndoRedo from "../containers/UndoRedo";

const App = () => (
  <div className="position-absolute top-50 start-50 translate-middle">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
  </div>
);

export default App;

import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        className="mb-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <div className="input-group ">
          <input
            className="input-group-text"
            ref={(node) => {
              input = node;
            }}
          />
          <button className="form-control" type="submit">
            Добавить запись
          </button>
        </div>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;

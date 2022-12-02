import React from "react";
import { ActionCreators as UndoActionCreators } from "redux-undo";
import { connect } from "react-redux";

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <p className="btn-group">
    <button
      className="btn  btn-outline-primary"
      onClick={onUndo}
      disabled={!canUndo}
    >
      Назад
    </button>
    <button
      className="btn  btn-outline-primary"
      onClick={onRedo}
      disabled={!canRedo}
    >
      Вперёд
    </button>
  </p>
);

const mapStateToProps = (state) => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0,
});

const mapDispatchToProps = {
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo,
};

UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo);

export default UndoRedo;

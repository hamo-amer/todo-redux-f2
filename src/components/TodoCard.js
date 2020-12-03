import React from "react";
import { connect } from "react-redux";
import { removeTodo, toggleComplete } from "../js/actions";
import EditForm from "./EditForm";

const TodoCard = ({ todo, removeTodo, toggleComplete }) => {
  return (
    <div className="todo-card">
      <p
        style={
          todo.isComplete
            ? { textDecoration: "line-through", opacity: "0.3" }
            : {}
        }
      >
        {todo.text}
      </p>
      <div>
        <button onClick={() => toggleComplete(todo.id)}>
          {todo.isComplete ? "UNDO" : "COMPLETE "}
        </button>
        <button onClick={() => removeTodo(todo.id)}>DELETE</button>
        {!todo.isComplete && <EditForm oldTodo={todo} />}
      </div>
    </div>
  );
};

export default connect(null, { removeTodo, toggleComplete })(TodoCard);

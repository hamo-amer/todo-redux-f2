import React from "react";
import { connect } from "react-redux";
import { filterTask } from "../js/actions";
import TodoCard from "./TodoCard";

function filterTodos(todoList, filterQuery) {
  // todoList : Array , filterQuery : String
  //filterQuery  ["no-filter" , "done" ,"undone"]
  switch (filterQuery) {
    case "done":
      return todoList.filter((todo) => todo.isComplete === true);
    case "undone":
      return todoList.filter((todo) => todo.isComplete === false);
    case "no-filter":
    default:
      return todoList;
  }
}

const TodoList = ({ todoList, filterQuery }) => {
  const result = filterTodos(todoList, filterQuery);
  return (
    <div className="todo-list">
      {result.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  todoList: state.todos,
  filterQuery: state.filterTask,
});

export default connect(mapStateToProps)(TodoList);

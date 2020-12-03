import {
  ADD_TODO,
  TOGGLE_COMPLETE,
  EDIT_TASK,
  REMOVE_TODO,
  FILTER_TASKS,
} from "../const";

export const addTodo = (newTask) => {
  // newTask = {id , text , isComplete }
  return {
    type: ADD_TODO,
    payload: newTask,
  };
};

export const removeTodo = (taskID) => ({
  type: REMOVE_TODO,
  payload: taskID,
});

export const toggleComplete = (taskID) => ({
  type: TOGGLE_COMPLETE,
  payload: taskID,
});

export const editTask = (newTask) => ({
  // newTask = { oldId , oldIsComplete , newText }
  type: EDIT_TASK,
  payload: newTask,
});

export const filterTask = (str) => ({
  type: FILTER_TASKS,
  payload: str,
});

import {
  addTodoActionCreator,
  addUserActionCreator,
  removeTodoActionCreator,
} from "./actionCreator.js";
import store from "./store.js";
import userReducer from "./userReducer.js";
console.log(store.getState());

store.dispatch(addTodoActionCreator("Buy Milk"));
store.dispatch(addTodoActionCreator("Buy Books"));
store.dispatch(addTodoActionCreator("Buy Cheez"));

store.dispatch(
  removeTodoActionCreator(store.getState().todosState.todos[0].id)
);

store.dispatch(addUserActionCreator("Shruti"));

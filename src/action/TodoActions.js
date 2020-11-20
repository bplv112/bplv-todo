import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import {fetchTodoData} from '../utils/Utils';

const TodoActions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },

  deleteTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id,
    });
  },

  toggleTodo(id) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    });
  },
  todoFetchDatabase(data) {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TODO_FETCH_DATABASE,
      data: data,
    });
  },

};

export default TodoActions;

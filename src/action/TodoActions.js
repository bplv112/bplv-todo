import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

const TodoActions = {
  addTodo: text => {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },

  deleteTodo: id => {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.DELETE_TODO,
      id,
    });
  },

  toggleTodo: id => {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TOGGLE_TODO,
      id,
    });
  },

  todoFetchDatabase: () => {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.TODO_FETCH_DATABASE
    });
  },

  updateDraft: text => {
    TodoDispatcher.dispatch({
      type: TodoActionTypes.UPDATE_DRAFT,
      text,
    });
  },

};

export default TodoActions;

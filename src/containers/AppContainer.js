import AppView from '../view/App/App';
import {Container} from 'flux/utils';
import TodoActions from '../action/TodoActions';
import TodoStore from '../store/TodoStore';


function getStores() {
  return [
    TodoStore
  ];
}

function getState() {
  return {
    todos: TodoStore.getState(),
    // onAdd: TodoActions.ADD_TODO,
    // onDeleteTodo: TodoActions.DELETE_TODO,
    // onToggleTodo: TodoActions.TOGGLE_TODO,
	  // onUpdateDraft: TodoActions.updateDraft,
	  // OnDatabaseUpdate: TodoActions.TODO_UPDATE_DATABASE,
	  onFetchDatabase: TodoActions.todoFetchDatabase
  };
}

export default Container.createFunctional( AppView, getStores, getState);

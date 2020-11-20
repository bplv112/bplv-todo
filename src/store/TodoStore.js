import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Todo from '../containers/Todo/Todos';
import TodoActionTypes from '../action/TodoActionTypes';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import { getTempId} from '../utils/Utils';
import {getCurrentDate} from '../utils/Utils';

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case TodoActionTypes.ADD_TODO:
        // Don't add todos with no text.
        if (!action.text) {
          return state;
		}

		// Get a temporay ID, new ID will be set on firebase.
		const id = getTempId(),
			date = getCurrentDate('/');
        return state.set(id, new Todo({
          	id,
          	task: action.text,
		    done: false,
		  	time: date
        }));

	  // Delete a todo.
      case TodoActionTypes.DELETE_TODO:
		return state.delete(action.id);

	  // Toggle a todo.
      case TodoActionTypes.TOGGLE_TODO:
        return state.update(
          action.id,
          todo => todo.set('done', !todo.complete),
		);

	  // Toggle a todo.
      case TodoActionTypes.TODO_FETCH_DATABASE:
			const map = action.data.map((todo,key) => {
				let newId = todo.id;
				return state.set(newId, new Todo({
					newId,
					task: todo.task,
					done: todo.done,
					time: todo.date
			  	}));
			})
		return state;

      default:
        return state;
    }
  }
}

export default new TodoStore();

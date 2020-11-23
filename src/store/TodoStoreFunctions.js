import TodoActionTypes from '../action/TodoActionTypes';
import { getTempId} from '../utils/Utils';
import {getCurrentDate} from '../utils/Utils';
import Todos from '../containers/Todo/Todos';
// import Immutable from 'immutable';
import {fetchTodoData} from '../utils/Utils';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

const StoreFunctions = {

	[TodoActionTypes.ADD_TODO]: ( state, action ) => {

		// Don't add todos with no text.
        if (!action.text) {
			return state;
		}

		  // Get a temporay ID, new ID will be set on firebase.
		  const id = getTempId(),
			  date = getCurrentDate('/');
		  return state.set(id, new Todos({
				id,
				task: action.text,
			  done: false,
				time: date
		  }));

	},

	[TodoActionTypes.DELETE_TODO]: ( state, action ) => {
		return state.delete(action.id);
	},

	[TodoActionTypes.TOGGLE_TODO]: ( state, action ) => {
		return state.update(
			action.id,
			todo => todo.set('done', !todo.done),
		  );
	},

	[TodoActionTypes.TODO_FETCH_DATABASE]: ( state, action ) => {
		fetchTodoData().then(
			response => {
				TodoDispatcher.dispatch({
					type: TodoActionTypes.TODO_STORE_DATABASE,
					data: response
				});
			}
		);
	},

	[TodoActionTypes.TODO_RECEIVE_DATABASE]: ( state, action ) => {
		return state.merge( action.data );
	},

}
export default StoreFunctions;

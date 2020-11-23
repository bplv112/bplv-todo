import {ReduceStore} from 'flux/utils';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import StoreFunctions from './TodoStoreFunctions.js';
import Immutable from 'immutable';

class TodoStore extends ReduceStore {

  constructor() {
    super(TodoDispatcher);
  }

  getInitialState() {
	return Immutable.OrderedMap();
  }

  reduce( state, action ) {
	if( StoreFunctions[action.type] ) {
		return StoreFunctions[action.type]( state, action );
	}
	return state;
  }
}

export default new TodoStore();

import AppView from '../view/App/App';
import {Container} from 'flux/utils';
import TodoStore from '../store/TodoStore';
import TodoDraftStore from '../store/TodoDraftStore';


function getStores() {
	return [
		TodoDraftStore,
		TodoStore,
	];
}

function getState() {
	return {
		todos: TodoStore.getState(),
		draft: TodoDraftStore.getState()
	};
}

export default Container.createFunctional( AppView, getStores, getState );
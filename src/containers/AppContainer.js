import AppView from '../view/App/App';
import {Container} from 'flux/utils';
import TodoActions from '../action/TodoActions';
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
		draft: TodoDraftStore.getState(),
		onAdd: TodoActions.addTodo,
		onToggleTodo: TodoActions.toggleTodo,
		onUpdateDraft: TodoActions.updateDraft,
		onFetchDatabase: TodoActions.todoFetchDatabase,
		onDelete: TodoActions.deleteTodo
	};
}

export default Container.createFunctional( AppView, getStores, getState);

import Immutable from 'immutable';

const Todos = Immutable.Record({
	id: '',
	task: '',
	done: false,
	time: '',
});

export default Todos;

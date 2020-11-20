import Immutable from 'immutable';

const Todo = Immutable.Record({
  id: '',
  done: false,
  task: '',
  time: '',
});

export default Todo;

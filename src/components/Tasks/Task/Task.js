import React from 'react';
import Toast from 'react-bootstrap/Toast';
import TodoActions from '../../../action/TodoActions';
import './Task.css';

const Task = (props) => {
	return (
	  <Toast onClose={() => TodoActions.deleteTodo( props.taskid )}>
		<Toast.Header>
			<input type="checkbox" taskid={props.taskid} onChange={() => TodoActions.toggleTodo( props.taskid )} checked={props.done} value="1"/>
			<strong className="mr-auto">{ !props.done ? 'Todo' : 'Done'}</strong>
			<small>{props.time}</small>
		</Toast.Header>
		<Toast.Body>{props.name}</Toast.Body>
	  </Toast>
	);
};

export default Task;
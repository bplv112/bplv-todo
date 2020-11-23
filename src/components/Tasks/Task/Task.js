import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './Task.css';

const Task = (props) => {
	console.log( props.done );
	return (
	  <Toast onClose={props.delete}>
		<Toast.Header>
			<input type="checkbox" taskid={props.taskid} onChange={props.completed} checked={props.done} value="1"/>
			<strong className="mr-auto">{ !props.done ? 'Todo' : 'Done'}</strong>
			<small>{props.time}</small>
		</Toast.Header>
		<Toast.Body>{props.name}</Toast.Body>
	  </Toast>
	);
};

export default Task;
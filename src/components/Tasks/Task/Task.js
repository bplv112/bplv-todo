import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import './Task.css';

const Task = (props) => {
	const [show] = useState(true);

	return (
	  <Toast show={show} onClose={() => { props.onClose();} }>
		<Toast.Header>
			<input type="checkbox" onChange={props.completed} checked={props.done} value="1"/>
			<strong className="mr-auto">{props.cardTitle}</strong>
			<small>{props.time}</small>
		</Toast.Header>
		<Toast.Body>{props.name}</Toast.Body>
	  </Toast>
	);
};

export default Task;
import React from  'react';
import './Todo.css';

const todo = (props) => {
	return (
		<div className="add-items d-flex">
			<input type="text" onChange={props.tempTask} value={props.taskVal} className="form-control todo-list-input" placeholder="What do you need to do today?"/>
				<button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={props.addTask} >Add</button>
			</div>
	);
};

export default todo;
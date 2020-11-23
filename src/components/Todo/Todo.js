import React from  'react';
import './Todo.css';

const todo = (props) => {
	return (
		<div className="add-items d-flex">
			<input
				autoFocus={true}
				id="new-todo"
				placeholder="What do you need to do today?"
				value={props.draft}
				onBlur={props.addTask}
				onChange={props.onChange}
			/>
			<button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={props.addTask} >Add</button>
		</div>
	);
};

export default todo;
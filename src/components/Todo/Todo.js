import React from  'react';
import TodoActions from '../../action/TodoActions';
import './Todo.css';

const todo = (props) => {
	return (
		<div className="add-items d-flex">
			<input
				autoFocus={true}
				id="new-todo"
				placeholder="What do you need to do today?"
				value={props.draft}
				onBlur={() => TodoActions.addTodo( props.draft )}
				onChange={( event ) => TodoActions.updateDraft( event )}
			/>
			<button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={() => TodoActions.addTodo( props.draft )} >Add</button>
		</div>
	);
};

export default todo;
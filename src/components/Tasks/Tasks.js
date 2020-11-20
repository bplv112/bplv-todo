import React from 'react';
import Task from './Task/Task'

const tasks = (props) => props.tasks.map( (task, index ) => {
	const todo = task ? Object.entries(task).map(([id,todo])=>{
		console.log( todo.done );
		return <Task
			name={todo.task}
			time={todo.time}
			done={todo.done}
			taskid={id}
			onClose={() => props.deleted(id, todo)}
			completed={(event) => props.done(event, id)}
			key={id.toString()}
		/>
	}) : '';
	return todo;
});

export default tasks;
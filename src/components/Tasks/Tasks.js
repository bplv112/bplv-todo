import React from 'react';
import Task from './Task/Task'

const tasks = (props) => props.tasks.map( (task, index ) => {
	const todo = task ? Object.entries(task).map(([id,todo])=>{
		return <Task
			name={todo.task}
			time={todo.time}
			done={todo.done}
			taskid={id}
			cardTitle={ true === task.done ? 'Done' : 'Todo'}
			onClose={() => props.deleted(id, todo)}
			completed={(event) => props.done(event, id)}
			key={id.toString()}
		/>
	}) : '';
	return todo;
});

export default tasks;
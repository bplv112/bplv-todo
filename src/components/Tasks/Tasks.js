import React from 'react';
import Task from './Task/Task'

const tasks = (props) => props.tasks.map( (task, index ) => {
	return <Task
		name={task.task}
		time={task.time}
		done={task.done}
		id={task.id}
		cardTitle={ true=== task.done ? 'Done' : 'Todo'}
		onClose={()=> props.deleted(index)}
		completed={(event) => props.done(event, task.id)}
		key={task.id.toString()}
	/>
});

export default tasks;
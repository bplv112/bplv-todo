import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Tasks from '../components/Tasks/Tasks';
import Todo from '../components/Todo/Todo';
import './App.css';

class App extends Component {

	state = {
	  tasks: [

	   {time: '11/2020', task: 'Maxx',  done: true, id: 22},
	   {time: '12/2020', task: 'bplv', done: false, id: 3},
	   {time: '13/2020', task: 'hey',  done: false, id:7}

	  ]
	}

	// handler for deleting todo.
	deleteHandler = (index) => {
		const tasks =[...this.state.tasks];
		tasks.splice( index, 1 );
		this.setState({tasks:tasks});
		console.log( this.state, index );
	}

	// handler for marking the todo as done.
	doneHandler = (event, id) => {
		const taskIndex = this.state.tasks.findIndex( p =>{
			return p.id === id;
		});

		const task ={
		...this.state.tasks[taskIndex]
		};

		task.done = event.target.checked;
		console.log( task.done );
		const tasks = [ ...this.state.tasks];
		tasks[taskIndex] = task;
		this.setState({tasks:tasks});
		console.log( this.state );


	}

	render() {
	  return (
		<Container className="p-3">
		  <Jumbotron>
			<h1 className="header d-flex justify-content-center">Your Todo-list</h1>
			<Todo></Todo>
			<Tasks
				tasks={this.state.tasks}
				deleted={this.deleteHandler}
				done={this.doneHandler}
			>
			</Tasks>
		  </Jumbotron>
		</Container>
	  );
	}
}

export default App;
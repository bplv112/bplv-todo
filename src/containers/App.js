import React, { Component } from 'react';

// Import bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// Import custom components.
import Tasks from '../components/Tasks/Tasks';
import Todo from '../components/Todo/Todo';
import Notice from '../components/Notice/Notice';
import {getCurrentDate} from '../utils/Utils';

import './App.css';

class App extends Component {

	state = {
	  tasks: [

	   {time: '11/2020', task: 'Maxx',  done: true, id: 22},
	   {time: '12/2020', task: 'bplv', done: false, id: 3},
	   {time: '13/2020', task: 'hey',  done: false, id:7}

	  ],
	  tempTasks:{},
	  alert:{variant:'',message:''},
	  showAlert:false,
	  setShowAlert:false,
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

		const task = {
		...this.state.tasks[taskIndex]
		};

		task.done = event.target.checked;
		const tasks = [ ...this.state.tasks];
		tasks[taskIndex] = task;
		this.setState({tasks:tasks});
	}

	// handler for input.
	taskChangeHandler = (event) => {
		let date = getCurrentDate('/');
		this.setState({
			tempTasks:{time: date, task: event.target.value,  done: false, id: 223}
		});
	}

	// Handler for tasks.
	addTaskHandler = () => {
		if( 0 !== Object.keys(this.state.tempTasks).length ) {
			const state = {
				...this.state
			}
			state.tasks.push( this.state.tempTasks );
			this.setState({tasks:state.tasks, tempTasks:'', alert:{variant:'success', message: 'Task Added'}, showAlert:true, setShowAlert: true});
		} else {
			this.setState({alert:{variant:'danger', message: 'Nothing to add'}, showAlert:true, setShowAlert: true});
		}

	}

	render() {
	  return (
		<Container className="p-3">
		  <Jumbotron>
			<h1 className="header d-flex justify-content-center">Your Todo-list</h1>
			<Todo
				tempTask={this.taskChangeHandler}
				addTask={this.addTaskHandler}
			></Todo>

			<Notice variant={this.state.alert.variant} message={this.state.alert.message}>
		 	</Notice>

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
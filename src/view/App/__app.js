import React, { Component } from 'react';

// Import bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

// Import custom components.
import Tasks from '../../components/Tasks/Tasks';
import Todo from '../../components/Todo/Todo';
import Notice from '../../components/Notice/Notice';
import {getCurrentDate} from '../../utils/Utils';
import {getTempId} from '../../utils/Utils';
import Loader from '../../components/Loader/Loader';

// Import the db handler.
import DB from '../../todo-axios';

import './App.css';

class App extends Component {

	state = {
	  alert:{variant:'',message:''},
	  showAlert:false,
	  setShowAlert:false,
	  loading:true,
	  dataCount:0,
	}

	// handler for deleting todo.
	deleteHandler = (index,todo) => {
		const tasks = this.state.tasks;
		delete tasks[0][index];
		this.deleteDBHandler( index, tasks );
	}

	// handler for marking the todo as done.
	doneHandler = (event, id) => {
		if ( ! ( id in this.state.tasks[0] ) ) {
			return id;
		}

		const task   = this.state.tasks[0][id],
		 	  tasks  = this.state.tasks;
		task.done    = event.target.checked;
		tasks[0][id] = task;

		this.editDBHandler( task, id, tasks );
	}

	// handler for input.
	taskChangeHandler = (event) => {
		let date = getCurrentDate('/');
		this.setState({
			tempTasks:{time: date, task: event.target.value, done: false}
		});
	}

	// Handler for tasks.
	addTaskHandler = () => {
		if( 0 !== Object.keys(this.state.tempTasks).length ) {
			let state = {
				...this.state
			}

			// check empty values at the start.
			if( ! state.tasks[0] ) {
				state.tasks[0] = {};
				state.tasks[0][getTempId()] ={ ...state.tempTasks }
			} else {
				const tempTasks = { ...state.tempTasks };
				state.tasks[0][getTempId()] = tempTasks;
			}

			this.updateDBHandler( state );
			this.setState({tasks:state.tasks, tempTasks:{time: '', task: '', done: ''}, alert:{variant:'success', message: 'Task Added'}, showAlert:true, setShowAlert: true});

		} else {
			this.setState({alert:{variant:'danger', message: 'Nothing to add'}, showAlert:true, setShowAlert: true});
		}
	}

	// Database update
	updateDBHandler = ( data ) => {
		DB.post('/todo-bplv.json', data.tempTasks)
		.then(response => {
		})
		.catch(error=>{
		});
	}

	editDBHandler = ( data, id, tasks ) => {
		DB.put('/todo-bplv/' + id.toString() + '/.json', data)
		.then(response => {
			this.setState({tasks:tasks});
		})
		.catch(error=>{
		});
	}
	// Database delete
	deleteDBHandler = ( data, tasks ) => {
		DB.delete('/todo-bplv/' + data.toString() + '.json')
		.then(response => {
			this.setState({tasks:tasks});
		})
		.catch(error=>{
		});
	}

	// Get data.
	componentDidMount () {
		this.getDataFromRemote();
	}

	//Data handler.
	getDataFromRemote() {
		DB.get('/todo-bplv.json')
		.then(response => {
			this.setState({tasks: [response.data], loading:false});
		})
		.catch(error=>console.log(error));
	}

	render() {
		if( this.state.loading ) {
			return (
				<Loader/>
			);
		} else {
			return (
				<Container className="p-3">
					<Jumbotron>
						<h1 className="header d-flex justify-content-center">Your Todo-list</h1>

						<Todo
							tempTask={this.taskChangeHandler}
							addTask={this.addTaskHandler}
							taskVal={this.state.tempTasks.task}
						/>

						<Notice variant={this.state.alert.variant} message={this.state.alert.message}/>

						<Tasks
							tasks={this.state.tasks ? this.state.tasks : []}
							deleted={this.deleteHandler}
							done={this.doneHandler}
						/>

					</Jumbotron>
				</Container>
			);
		}
	}
}

export default App;
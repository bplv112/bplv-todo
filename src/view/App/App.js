import React, {Component} from 'react';
import Task from '../../components/Tasks/Task/Task';

// Import bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Todo from '../../components/Todo/Todo';

class AppMain extends Component {

	// handler for marking the todo as done.
	doneHandler = event => {
    const id = event.target.getAttribute( 'taskid' );
    this.props.todoProps.onToggleTodo( id );
  }

  	// handler for deleting todo.
  deleteHandler = id => {
    this.props.todoProps.onDelete( id );
  }

  addTodoHandler = () => {
    this.props.todoProps.onAdd( this.props.todoProps.draft );
  }

  updateDraftHandler = event => {
    this.props.todoProps.onUpdateDraft( event.target.value );
  }

  render() {
    return (
      <Container className="p-3">
					<Jumbotron>
						<h1 className="header d-flex justify-content-center">Your Todo-list</h1>

						<Todo
							addTask={this.addTodoHandler}
              onChange={this.updateDraftHandler}
              value={this.props.todoProps.draft}
						/>

            {[ ...this.props.todoProps.todos.values() ].reverse().map(todo => (
              <Task
                name={todo.task}
                time={todo.time}
                done={todo.done}
                taskid={todo.id}
                key={todo.id}
                completed={this.doneHandler}
                delete={ () => this.deleteHandler(todo.id) }
              />
            ))}

					</Jumbotron>
			</Container>
    );
  }

}

function App(props) {
  return <AppMain todoProps={props} />
}


export default App;

import React, {Component} from 'react';
import {fetchTodoData} from '../../utils/Utils';

class AppMain extends Component {

  componentDidMount(){

    const fetchData = async () => {
      const response  = await fetchTodoData();
      await this.props.todoProps.onFetchDatabase(response);
    };

    fetchData();
    console.log( this.props.todoProps.todos.values() );
  }

  render() {
    console.log( this.props.todoProps.todos );
    return (
      <div>
        This is a test
      </div>
    );
  }

}

function App(props) {
  return <AppMain todoProps={props} />
}


export default App;

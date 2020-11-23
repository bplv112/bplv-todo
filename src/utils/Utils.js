// Import the db handler.
import DB from '../todo-axios';
import Todos from '../containers/Todo/Todos';

export function getCurrentDate(separator=''){
	let newDate = new Date()
	let date = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();

	return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

export function getTempId(length=7) {
	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

//Data handler.
export function getDataFromRemote() {
	const response = DB.get('/todo-bplv.json').then(result => { return result.data});
	return response;
}

export async function fetchTodoData() {
	let rawTodos = await getDataFromRemote(),
		tasks    = {};

	if( ! rawTodos ) {
		return;
	}

	//get data.
	if( rawTodos ) {
		Object.entries( rawTodos ).map( ( [id,todo] ) => {
			return tasks[id] = new Todos({
				id:id,
				task: todo.task,
				done: todo.done,
				time: todo.time
			});
		})
	}

	return tasks;
}
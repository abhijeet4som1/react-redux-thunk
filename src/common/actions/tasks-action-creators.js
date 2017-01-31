import {TasksModel} from '../components/Tasks/TasksHelper';
import {fromJS,List} from 'immutable';

/*initial state for the Tasks component*/
export const initialState=fromJS({
	tasks:List<TasksModel>();
});

//all actions available in the Tasks component
export const ADD_TASK="ADD_TASK";
const addTask= (task:TasksModel) => {
	return dispatch({type:ADD_TASK, task:TasksModel});
}

export{
	addTask
}
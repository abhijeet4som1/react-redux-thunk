import React from 'react';

/**
Parent class for tasks view and add component
*/
require('./tasks.css');
class TaskContainer extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="tasks">
				Task Container
			</div>
		);
	}
}

export default TaskContainer;
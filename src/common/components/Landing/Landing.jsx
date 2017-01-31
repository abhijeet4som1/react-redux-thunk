import React from 'react';
import Header from '../Header/Header';
import TaskContainer from '../Tasks/TaskContainer';

require('./landing.css');
class Landing extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<Header/>
				<TaskContainer/>
			</div>
		);
	}

}

export default Landing;
import React from 'react';

require('./header.css');
class Header extends React.Component{

	constructor(props){
		super(props);
	}

	shouldComponentUpdate(){
		return false;
	}

	render(){
		return(
			<div className="header">
				<span className="title">
					React + Redux + Thunk
				</span>
			</div>
		);
	}
}

export default Header;
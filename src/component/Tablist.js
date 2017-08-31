import React from 'react';
import '../App.css';
import ToggleDisplay from 'react-toggle-display';

export default class Tablist extends React.Component{

	constructor(){
		super();
		this.state = {show : false};
	}
	
	toggleHide(){
		const hs = !this.state.collapsed;
		this.setState({show:!this.show});
	}

	render(){
		const {collapsed} = this.state;
		const navClass = collapsed ? "collapse" : "";
		return(
				<div>
					<button type="button" className="" onClick ={ () => this.toggleHide()}>
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>Show Lists
					</button>
					<ToggleDisplay show={this.state.show}> 
						<ul className="nav navbar nav-pills nav-stacked">
							<li className="active">
								<a href="profile">
									<i className="fa fa-user">Profile</i>
								</a>
							</li>
							<li className="active">
								<a href="friends">
									<i className="fa fa-users">Friends</i>
								</a>
							</li>
							<li className="active">
								<a href="home">
									<i className="fa fa-file-image-o">Photos</i>
								</a>
							</li>
						</ul>
					</ToggleDisplay>
				</div>
			 
		);
	}
}
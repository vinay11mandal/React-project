import React from 'react';
import '../App.css';
 

export default class Home extends React.Component{

	constructor(){
		super();
		 
	}
	
	render(){
		return(
			<div>
				<div className="panel">
					<form id="postformid" className="post-form" action ="" method="POST">
						<textarea cols="60" id="post-text" maxLength="254"
						 name="body" placeholder="Write your post..." rows="3" required=""></textarea>
						<button type="submit" className="pull-right">Post</button>
					</form>
				</div> 
				<div className="post">
					<div className="newpost"></div>
				</div>
			</div>
		)
	}
}
import React from 'react';
import '../App.css';


export default class Profile_name extends React.Component{

    constructor(){
        super();
        this.state ={name:"Vindomox",};
    }
    
    render(){
        
    
        return(
                <div className="panel">         
                    <div className="user-heading round">
                        <h3 className="user-heading">params</h3>
                        <h4 className="profile-name">{this.props.profile_name}</h4>
                        <h4 className="profile-name">-{this.state.name}</h4>
                    </div>
                </div>
            );     
    }   
}
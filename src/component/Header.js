import React from 'react';
import '../App.css';
import Searchbar from "./Searchbar";
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    
    constructor(){
        super();
        this.state = {name:'FameOn', } 

    }
    
    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    changeTitle(){

    }
    
    render(){
        setTimeout(() => {
            this.setState({name:"fameOn"});
        }, 5000);

        const {location} = this.props;
        const homeclass = location.pathname.match("/Home") ? "active" : '';
        const profileclass = location.pathname.match("/Profile") ? "active" : '';
        const friendsclass = location.pathname.match("/Friends") ? "active" : '';
        const loginclass = location.pathname.match("/Login") ? "active" : '';
        const Links = () => (
        <div className = {"navclass"}>
            <ul className="nav nav-tabs pull-right">
                <li className = {homeclass}><Link to="/Home">Home</Link></li>
                <li className = {profileclass}><Link to="/Profile">Profile</Link></li>
                <li className = {friendsclass}><Link to="/Friends">Friends</Link></li>
                <li className = {loginclass}><Link to="/Login">Login</Link></li>
            </ul>
        </div>
        )
        
        return (
            <div className="App">
                <nav className="navbar navbar-default navbar-fixed-top navbar-principal">
                  <div className="container">
                    <h6 className="heading search-bar pull-left">{this.props.title}</h6>
                    <h2 className="heading search-bar pull-left">
                        {this.state.name}
                        </h2>
                    <Searchbar/>
                    <input onChange={this.handleChange.bind(this)}/>   
                    <Links/>
                  </div>
                </nav>
            </div>
            )
    }   
}
import React, { Component } from 'react';
import '../App.css';
import Header from "./Header";
import {withRouter} from "react-router-dom";
import Tablist from "./Tablist";
import Home from './Home';
import {Route} from "react-router-dom";
import $ from 'jquery';
import cookie from 'react-cookie';
import Profile_name from "./Profile_name";
import Login from './Login';

class App extends Component {
    
    constructor(props){
        super(props);
        let authenticate;
        let loginValue = cookie.load('auth_token', { path: '/' });
        loginValue ? authenticate = true : authenticate = false

        this.state = { logedIn: authenticate, current_user: [], title: "Welcome", profile_name: "Welcome", }

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    
    changeTitle(title){
            this.setState({title});
        }
    
    componentWillMount() {
        var baseUrl = 'http://localhost:3000/';
        $.ajaxSetup({
        beforeSend: function(request, options) {
            request.setRequestHeader("Authorization", cookie.load('auth_token', { path: '/' }) );
            options.url = baseUrl + options.url;
        }
        });

        let self = this;
        $.ajax({
        type: 'GET',
        url: "users/get_user",
        success: function(user){
            self.setState({ current_user: user })
        }
        });
    }

    login(user){
        this.setState({ logedIn: true, current_user: user })
        history.push('/');
    }

    logout(){
        this.setState({ logedIn: false, current_user: [] })
        history.push('/login');
    }
    
    render() {
        const {location} = this.props;
    
        return (
            <div className="row">
                <Header location = {location} changeTitle = {this.changeTitle.bind(this)} title={this.state.title}/>
                <nav className = "container post-bar">            
                    <div className = "row">
                        <div className = "profile-nav col-md-3">
                            <Profile_name path="Profile_name/:param" profile_name={this.state.profile_name} Component="Profile_name"/>
                            <Tablist/>
                        </div>
                        <div className = "col-md-6">
                            <div className = "profile-info  animated fadeInUp">
                                <Route path='/Home' component={Home}/>
                            </div>
                            <Route path='/Login' component={Login}/>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default withRouter(App);

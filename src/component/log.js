import React, { Component } from 'react';
import '../css/App.css';
import $ from 'jquery';
import Header from './Header.js';
import {withRouter} from "react-router-dom";
import cookie from 'react-cookie';

class App extends Component {
 constructor(props) {
   super(props);

   let authenticate;
   let loginValue = cookie.load('auth_token', { path: '/' });
   loginValue ? authenticate = true : authenticate = false

   this.state = { logedIn: authenticate, current_user: [] }

   this.login = this.login.bind(this);
   this.logout = this.logout.bind(this);
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
    let children = React.cloneElement(this.props.children, {login: this.login, ...this.state} );
    return (
      <div className="App">
        <Header logout={this.logout} logedIn={this.state.logedIn}/>
          { this.state.current_user ? <p>{this.state.current_user.name}</p> : <p>React</p> }
            {children}
      </div>
   );
 }
}
import React, { Component } from 'react'
import $ from 'jquery';
import cookie from 'react-cookie';
import {withRouter} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    
    this.props.logedIn //&& history.push('/');
    this.state = { email: '', password: '' }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.valid = this.valid.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.setToken = this.setToken.bind(this);
  }

  onChangeHandler(e) {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }

  valid() {
    return this.state.email && this.state.password
  }

  setToken(token, user) {
    cookie.save('auth_token', token, { path: '/' });
    this.props.login(user);
  }

  loginUser(e) {
    e.preventDefault();
    let self = this;
    $.ajax({
      type: 'POST',
      url: "authenticate",
      data: {email: this.state.email, password: this.state.password},
      success: function(data){
        $.ajax({
          type: 'GET',
          url: "http://localhost:3000/login_user",
          beforeSend: function(xhr){xhr.setRequestHeader('Authorization', data['auth_token'])},
          success: function(user){
            self.setToken(data['auth_token'], user)
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <form className="register_user">
          <input type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChangeHandler}/>
          <input type="password" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
          <input type="submit" value="Login" disabled={!this.valid()} onClick={this.loginUser}/>
         </form>
      </div>
    );
  }
}

export default withRouter(Login);
import React, {Component} from 'react';
import '../App.css';

export default class Searchbar extends Component {
    render(){
        const inputstyle = {
            color:"darkblue"
        };
        return(
            <form className="navbar-form search-bar" role="search">
                <div className="input-group add-on">
                    <input className="form-control" style = {inputstyle} 
                    placeholder="Search" name="srch-term" id="srch-term" 
                    type="text"/>
                    <ul className="search-results" id="search-results-id"></ul>
                </div>
            </form> 
            );
    }

}
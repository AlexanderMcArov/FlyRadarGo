import React from 'react';
import loginImg from '../../login.svg';
import './style.scss';


export class Login extends  React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className= "base-container" ref = {this.props.containerRef}>
          <div className = "header">Login</div>

          <div className= "content">
            <div className= "image">
              <img src = "https://logodix.com/logo/48425.png"/>
            </div>

            <div className = "form">
             <div className = "form-group">
             <label htmlFor = "username">Username</label>
              <input type = "email" name = "username" placeholder = "username"/>
             </div>

              <div className = "form-group">
              <label htmlFor = "email">Email</label>
                <input type = "password" name = "email" placeholder = "email"/>
              </div>
            </div>
          </div>

          <div className= "footer">
              <button type = "button" className = "btn">
                Login
              </button>
          </div>
          
        </div>
        )
    }
}


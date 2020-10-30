import React from 'react';
import Contact from './Contact';

class ContactInput extends React. Component{
    constructor(props){
        super(props);

        this.state = {
            input : ''
        };
    }
    addContacts = () => {
        const{input} = this.state
        if(input){
        this.props.addContacts(input);
        this.setState ({input : '' })
        }
    }

    inputChange = event =>{
        this.setState({input: event.target.value})
    }
    
    render(){
        const  {input} = this.state
        return (
            <div className = "contact-input">
             <input onChange = {this.inputChange} value = {input}></input>
             <button style={{background: 'rgb(200,200,200)', color: 'black', padding: '5px 10px', fontSize: '15px', margin: '10px'}} onClick = {this.addContacts}>ADD</button>
            </div>
        )
    }
}


export default ContactInput;
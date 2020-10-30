import React from 'react';


const Contact = ({contact,...props}) =>{
const  ActionBtn = () => <div className = "action-btn">{!contact.done ? <span onClick= {props.doneContacts}>✔️</span>:<span onClick = {props.deleteContacts}>X</span>}</div>


const className = "contact"  + (contact.done ? 'contact-done' : '')
 
    return (
        <div className = {className}>
            <p>{contact.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    )
}


export default Contact
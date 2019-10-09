import React from 'react';
import './Contact.css';

const Contact = (props) => {
  return (
  <div className="Contact">
    <img className="avatar" src={props.avatar} alt={props.name} />
    <div>
      <h4 class="name">{props.name}</h4>
      <div className="status">
        <p className={props.online ? "status-online" : "status-offline"}></p>
        <p className="status-text">{props.online ? "Online" :"Offline"}</p>
      </div>
    </div>
  </div>
  )
}

export default Contact;

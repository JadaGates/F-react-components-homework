import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  handleButtonChange = () => {
    const msg = {};
    msg.role = ROLE.CUSTOMER;
    msg.text = document.getElementById('user-input').value;
    this.props.onSendClicked(msg);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" id="user-input" />
        <button type="button" onClick={this.handleButtonChange}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;

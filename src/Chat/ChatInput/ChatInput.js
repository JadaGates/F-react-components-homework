import React, { Component } from 'react';
import './ChatInput.scss';
import { ROLE } from '../../constants';

class ChatInput extends Component {
  handleButtonChange = () => {
    const msg = {};
    const inputField = document.getElementById('user-input');
    msg.role = ROLE.CUSTOMER;
    msg.text = inputField.value;
    inputField.value = '';
    inputField.focus();
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

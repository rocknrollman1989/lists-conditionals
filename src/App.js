import React, { Component } from 'react';
import './App.css';
import DefaultTextInput from './components/DefaultTextInput';
import CheckMessageIsValid from './components/CheckMessageIsValid';

class App extends Component {

  state = {
    textValue: '',
    messageArray: [],
    isValidMessage: true,
  }

  handleInputChange = (e) => {
    const { value } = e.target
    this.setState({
      textValue: value,
    }, () => {
      const { state } = this
      this.setState({
        isValidMessage: state.textValue.length > 5 && state.textValue.length < 15 ? false : true,
      })
    })
  };

  handleClick = () => {
    const { messageArray, textValue } = this.state
    this.setState({
      messageArray: [...messageArray, textValue],
    }, () => {
      this.setState({
        isValidMessage: false,
        textValue: '',
      })
    })
  }

  handleDelete = (indexToDelete) => {
    const { messageArray } = this.state
    const newMessageArray = messageArray.filter((e, index) => {
      return index !== indexToDelete
    })
    this.setState({
      messageArray: newMessageArray
    })
  }

  render() {
    const { textValue, isValidMessage, messageArray } = this.state;
    let messages = null;

    if (messageArray.length) {
      messages = messageArray.map((message, index) => (
        <p key={index} onClick={() => this.handleDelete(index)}>{message}</p>
      ))
    }

    return (
      <div className="App">
        <div>
          <DefaultTextInput textValue={textValue} onChange={this.handleInputChange} />
          <button disabled={isValidMessage} onClick={this.handleClick}>Add message</button>
          <p>Your message length {textValue.length}</p>
          <CheckMessageIsValid messageLength={textValue.length} />
          {messages}
        </div>
      </div>
    );
  }
}

export default App;

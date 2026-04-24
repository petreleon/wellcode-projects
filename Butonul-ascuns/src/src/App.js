import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonCount: 10,
      inputValue: 10,
      randomNumber: Math.floor(Math.random() * 10000000)
    };
  }

  handleGuess = (buttonIndex) => {
    const target = this.state.randomNumber % this.state.buttonCount;
    if (buttonIndex === target) {
      alert('Ai ghicit!');
    } else {
      alert('Nu ai ghicit!');
    }
  };

  newNumber = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * 10000000)
    });
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  updateButtonCount = () => {
    const count = parseInt(this.state.inputValue, 10);
    if (count > 0) {
      this.setState({
        buttonCount: count,
        randomNumber: Math.floor(Math.random() * 10000000)
      });
    }
  };

  render() {
    const buttons = [];
    for (let i = 0; i < this.state.buttonCount; i++) {
      buttons.push(
        <Button
          key={i}
          variant="primary"
          onClick={() => this.handleGuess(i)}
          style={{ margin: '5px', width: '60px' }}
        >
          {i}
        </Button>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>Ghicește numărul!</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '700px' }}>
            {buttons}
          </div>
          <Button
            variant="success"
            onClick={this.newNumber}
            style={{ marginTop: '20px' }}
          >
            Alt număr
          </Button>
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="number"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              style={{ width: '60px', padding: '5px', textAlign: 'center' }}
            />
            <Button variant="warning" onClick={this.updateButtonCount}>
              Actualizează
            </Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

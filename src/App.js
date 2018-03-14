import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button color="danger"> Monkey </Button>
        <Input type="text"/>
      </div>
    );
  }
}

export default App;

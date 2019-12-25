import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Min', age: 20},
      {name: 'Uz', age: 30}
    ]
  }

  switchNameHandler = () => {
    console.log("Clicked");
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
         click={this.switchNameHandler}/>
        <Person name="Min" age="20" />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
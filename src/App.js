import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      { name: "Jessica Chastain", age: 42 },
      { name: "Jenny Lewis", age: 44 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [{ name: newName, age: 32 }, { name: "Rilo Kiley", age: 28 }]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Celia Foot", age: 32 },
        { name: event.target.value, age: 28 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Let's Do This</h1>
        <button onClick={() => this.switchNameHandler("Molly!")}>
          Switch Deets
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Bloom!")}
        >
          I am the best actor of this century.
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        >
          I play guitar.
        </Person>
      </div>
    );
  }
}

export default App;

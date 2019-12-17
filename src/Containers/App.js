import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'id1', name: 'Ali', age: 20 },
      { id: 'id2', name: 'Jan', age: 30 }
      // { id: 'id3', name: 'John', age: 23 }
    ],
    showPersons: false
  };
  toggleHandlerPerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changed={this.nameChangeHandler}
            clicked={this.deletePersonHandler}
            test={this.state.persons.length}
          />

          {/* {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
                test={this.state.persons.length}
              />
            );
          })} */}
        </div>
      );
      // btnClass.push(classes.Red);
    }

    return (
      <div className={classes.App}>
        <Cockpit clicked={this.toggleHandlerPerson}
        persons={this.state.showPersons}
         />
        {/* <h1>React App</h1>
        <button
          className={btnClass.join(' ')}
          onClick={this.toggleHandlerPerson}
        >
          Toggle Person
        </button> */}
        {/* {this.state.showPersons ? (
          <div>
            <Header
              name={this.state.persons.name}
              age={this.state.persons.age}
              changed={this.nameChangeHandler}
            />
          </div>
        ) : null} */}
        {persons}
      </div>
    );
  }
}

export default App;

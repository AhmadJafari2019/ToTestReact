import React, { Component } from 'react';
import classes from '../../../Containers/App.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] is Rendering');
    const assignedClasses = [];
    if (this.props.test <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.props.test <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.Person}>
        <p className={assignedClasses.join(' ')}>This is really Working.</p>
        <p onClick={this.props.click}>
          I am {this.props.name} and i am {this.props.age} years old.
        </p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          className={classes.input}
        />
      </div>
    );
  }
}

export default Person;

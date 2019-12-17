import React from 'react';
import classes from '../../../Containers/App.module.css';

const Person = props => {
  const assignedClasses = [];
  if (props.test <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.test <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Person}>
      <p className={assignedClasses.join(' ')}>This is really Working.</p>
      <p onClick={props.click}>
        I am {props.name} and i am {props.age} years old.
      </p>
      <input type="text" onChange={props.changed} value={props.name} className={classes.input}/>
    </div>
  );
};

export default Person;

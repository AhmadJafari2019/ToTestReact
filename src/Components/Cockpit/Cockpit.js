import React from 'react';
import classes from '../../Containers/App.module.css';
const cockpit = props => {
  const btnClass = [classes.Button];
  if (props.persons) {
    btnClass.push(classes.Red);
  }
  return (
    <div>
      <h1>React App</h1>
      <button className={btnClass.join(' ')} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
};

export default cockpit;

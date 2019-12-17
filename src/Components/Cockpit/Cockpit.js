import React, { useEffect } from 'react';
import classes from '../../Containers/App.module.css';
const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  });
  const btnClass = [classes.Button];
  if (props.persons) {
    btnClass.push(classes.Red);
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <button className={btnClass.join(' ')} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
};

export default Cockpit;

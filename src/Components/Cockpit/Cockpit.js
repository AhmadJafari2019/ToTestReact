import React, { useEffect, useRef } from 'react';
import classes from '../../Containers/App.module.css';
import AuthContext from '../Context/Auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(() => {
    //   alert('Data saved to the cloud.');
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      console.log('[Cockpit.js] Clean Up working.');
    };
  }, []);

  const btnClass = [classes.Button];
  if (props.persons) {
    btnClass.push(classes.Red);
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <button
        ref={toggleBtnRef}
        className={btnClass.join(' ')}
        onClick={props.clicked}
      >
        Toggle Person
      </button>
      <AuthContext.Consumer>
        {context => (
          <button className={classes.Button} onClick={context.login}>
            Log in
          </button>
        )}
      </AuthContext.Consumer>
    </div>
  );
};

export default Cockpit;

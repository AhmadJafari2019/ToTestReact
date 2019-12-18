import React, { useEffect, useRef, useContext } from 'react';
import classes from '../../Containers/App.module.css';
import AuthContext from '../Context/Auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
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

     
        <button className={classes.Button} onClick={authContext.login}>
          Log in
        </button>
      )
    </div>
  );
};

export default Cockpit;

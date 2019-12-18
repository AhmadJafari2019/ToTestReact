import React, { Component } from 'react';
import classes from '../../../Containers/App.module.css';
import withClass from '../../hoc/withClass';
import propTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import AuthContext from './../../Context/Auth-context';
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  static contextType = AuthContext;
  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authentication);
  }
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
      <Aux>
        {/* <AuthContext.Consumer> */}
        {this.context.authentication ? (
          <p>Authentication is Working.</p>
        ) : (
          <p>Please Login again</p>
        )}
        {/* </AuthContext.Consumer> */}
        {/* <div className={classes.Person}> */}

        <p className={assignedClasses.join(' ')}>This is really Working.</p>
        <p onClick={this.props.click}>
          I am {this.props.name} and i am {this.props.age} years old.
        </p>

        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
        />
        {/* </div> */}
      </Aux>
    );
  }
}

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func
};

export default withClass(Person, classes.Person);

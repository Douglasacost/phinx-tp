import React from 'react';
import { withRouter } from 'react-router-dom';
import NewForm from '../../../shared/AuthForm';
import { auth } from '../../../firebase';
import { Consumer } from '../../AppProvider';

const Signup = props => <Consumer>
  {({ state, ...context }) => (
    <NewForm
      action="createUser"
      title="Create account"
      isRegister
      onSuccess={() => auth.logout().then(() => {
        context.destroySession();
        context.clearMessage();
        props.history.push('/accountCreated');
      })}
      onError={({ message }) => context.setMessage(`Error occured: ${message}`)}
    />
  )}
</Consumer>;

export default withRouter(Signup);
import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import { auth } from '../../../firebase';
import { Consumer } from '../../AppProvider';
import { Menu } from 'antd';

const Navbar = props => {
  const handleLogout = context => {
    auth.logout();
    context.destroySession();
    props.history.push('/signedOut');
  };

  return <Consumer>
    {({ state, ...context }) => (
      state.currentUser ?
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/dashboard">Dashboard</Link></Menu.Item>
        <Menu.Item key="2"><Link onClick={() => handleLogout(context)} to="/login">Logout</Link></Menu.Item>
      </Menu>
        :
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/signup">Create Account</Link></Menu.Item>
      </Menu>
    )}
  </Consumer>
};

export default withRouter(Navbar);
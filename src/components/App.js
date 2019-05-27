import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AppProvider from './AppProvider';

import { Layout } from 'antd';
import FlashMessage from '../shared/FlashMessage';
import Dashboard from './views/dashboard/Dashboard';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Navbar from './views/dashboard/Navbar';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <Layout className="layout" style={{ height: '100vh' }}>
            <Header className="header">
              <Navbar />
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64, height: '100%' }}>
              <FlashMessage />
              <div style={{ background: '#fff', padding: 24, minHeight: 380, height: '100%' }}>
                <Route exact path="/" component={() =>
                  <h1 className="content">Welcome, Home!</h1>} />
                <Route exact path="/login" component={() => <Login />} />
                <Route exact path="/signup" component={() => <Signup />} />
                <Route exact path="/dashboard" component={() => <Dashboard />} />
                <Route exact path="/signedOut" component={() =>
                  <h1 className="content">You're now signed out.</h1>} />
                <Route exact path="/accountCreated" component={() =>
                  <h1 className="content">Account created. <Link to="/login">
                    Proceed to Dashboard</Link></h1>} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Edited by Douglas Acosta</Footer>
          </Layout>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
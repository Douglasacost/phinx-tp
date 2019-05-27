import React, {
    Component,
    createRef
  } from 'react';
import PropTypes from 'prop-types';
import { auth } from '../firebase';
import { Row, Col, Form as AntForm, Button, Input, Icon, Checkbox } from 'antd';
import {
  Link
} from 'react-router-dom';
  
class Form extends Component {
    constructor(props) {
      super(props);
  
      this.email = createRef();
      this.password = createRef();
      this.handleSuccess = this.handleSuccess.bind(this);
      this.handleErrors = this.handleErrors.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSuccess() {
      this.resetForm();
      this.props.onSuccess && this.props.onSuccess();
    }
  
    handleErrors(reason) {
      this.props.onError && this.props.onError(reason);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const {
            email,
            password,
            props: { action }
          } = this;
          
          auth.userSession(
            action,
            email.current.state.value,
            password.current.state.value
          ).then(this.handleSuccess).catch(this.handleErrors);
        }
      });
    }
  
    resetForm() {
      if (!this.email.current || !this.password.current) { return }
      const { email, password } = Form.defaultProps;
      this.email.current.state.value = email;
      this.password.current.state.value = password;
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div>
          <Row type="flex" justify="center" >
            <Col span={5}>
              <AntForm onSubmit={this.handleSubmit} className="login-form">
                <h1>{this.props.title}</h1>
                <AntForm.Item>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username"
                      name="name"
                      type="email"
                      ref={this.email}
                    />,
                  )}
                </AntForm.Item>
                <AntForm.Item>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      name="password"
                      type="password"
                      autoComplete="none"
                      ref={this.password}
                      placeholder="Password"
                    />,
                  )}
                </AntForm.Item>
                <AntForm.Item>
                  {this.props.isRegister ? 
                  <div>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Register
                    </Button>
                    <br/>
                    Or <Link to="/login">Log in!</Link>
                  </div> : 
                  <div>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <br/>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Log in
                    </Button>
                    <br/>
                    Or <Link to="/signup">create an account!</Link>
                  </div>
                  }
                  
                </AntForm.Item>
              </AntForm>
            </Col>
          </Row>
        </div>        
      )
    }
  }
  
  Form.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    onSuccess: PropTypes.func,
    onError: PropTypes.func
  }
  
  Form.defaultProps = {
    errors: '',
    email: '',
    password: ''
  }
  
  const NewForm = AntForm.create({ name: 'normal_login' })(Form);
  export default NewForm;
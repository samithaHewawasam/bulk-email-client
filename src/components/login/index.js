import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Checkbox, Form, Grid, Header, Image, Input, Segment } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import './login.css'
import renderFormInput from '../form/input'
import { login } from '../../actions/login'

const validate = values => {
  const errors = {}
  if (!values.userName) {
    errors.userName = 'user name is required'
  }

  if (!values.password) {
    errors.password = 'password is required'
  }

  return errors
}

class Login extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
  }

  render() {

    const { handleSubmit, user } = this.props

    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 300, margin: "50px auto" }}>
            <Form onSubmit={handleSubmit}>
                <Field name="email" component={renderFormInput} type="text" label="Email"/>
                <Field name="password" component={renderFormInput} type="password" label="Password"/>
                <Button style={{backgroundColor:"#000034", color: "white", marginBottom:"10px"}} size='small' type='submit'>Login</Button>
            </Form>
          </Grid.Column>
          </Grid.Row>
      </Grid>
    );
  }
}

const onSubmit = (values, dispatch) => {
  dispatch(login(values))
}

const mapStateToProps = (state) => {
  
  return {
    user: state.login_reducers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin : values => dispatch(login(values))
  }
}

Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)


export default reduxForm({
    onSubmit,
    form: 'login',
    validate
  })(Login)


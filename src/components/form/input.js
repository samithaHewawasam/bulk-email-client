import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Header, Image, Input, Select, Segment, Icon, Breadcrumb, Container, Message} from 'semantic-ui-react'

const renderFormInput = ({
  input,
  label,
  type,
  icon,
  meta: { touched, error, warning }
}) => (
  <Form.Field>
     <label style={{paddingBottom:"10px"}}>{label}</label>
     <input {...input} type={type} />
     {touched &&
        ((error && <Message color='red' size='mini'>{error}</Message>) ||
          (warning && <Message color='Yellow' size='mini'>{warning}</Message>))}
  </Form.Field>
)

export default renderFormInput

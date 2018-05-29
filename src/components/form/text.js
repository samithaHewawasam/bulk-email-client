import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Header, Image, Input, Select, Segment, Icon, Breadcrumb, Container} from 'semantic-ui-react'

const renderFormText = ({
  input,
  label,
  type,
  icon,
  meta: { touched, error, warning }
}) => (
  <Form.Field>
     <Header as="h4" style={{width:"150px", paddingTop:"30px"}}>{label}</Header>
  </Form.Field>
)

export default renderFormText

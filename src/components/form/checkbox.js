import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Header, Image, Input, Select, Segment, Icon, Breadcrumb, Container} from 'semantic-ui-react'

const renderFormCheckbox = ({
  input,
  label,
  type,
  icon,
  style,
  inline,
  meta: { touched, error, warning }
}) => (
  <Form.Field inline={inline}>
     <Checkbox label={label} style={style} {...input}/>
     {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
  </Form.Field>
)

export default renderFormCheckbox

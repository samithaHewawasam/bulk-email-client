import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Header, Image, Input, Select, Segment, Icon, Breadcrumb, Container, Message} from 'semantic-ui-react'

const renderFormSelect = ({
  input,
  label,
  type,
  options,
  inline,
  meta: { touched, error, warning }
}) => (
  <Form.Field inline={inline}>
     <label style={{width:"150px", paddingBottom:"10px"}}>{label}</label>
     <select {...input}>
     <option value=""></option>
      {options.map(({key, value, text}) => (
        <option value={value} key={key}>
          {text}
        </option>
      ))}
      </select>
      {touched &&
         ((error && <Message color='red' size='mini'>{error}</Message>) ||
           (warning && <Message color='Yellow' size='mini'>{warning}</Message>))}
  </Form.Field>
)

export default renderFormSelect

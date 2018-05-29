import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid, Header, Image, Input, Select, Segment, Icon, Breadcrumb, Container, Message} from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const renderDatePicker = ({input, placeholder, label, defaultValue, meta: {touched, error, warning} }) => (
  <Form.Field>
     <label style={{paddingBottom:"10px"}}>{label}</label>
        <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
        {touched &&
           ((error && <Message color='red' size='mini'>{error}</Message>) ||
             (warning && <Message color='Yellow' size='mini'>{warning}</Message>))}
  </Form.Field>
);

export default renderDatePicker

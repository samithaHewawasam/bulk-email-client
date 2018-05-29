import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './login'

const Root = ({ store }) => (
  <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Login}/>
      </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
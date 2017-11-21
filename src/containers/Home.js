import React, { Component } from 'react'
import { Provider } from 'react-redux'
import middleware from '../middleware/'
import Films from './Films'
import '../style.css'

const store = middleware()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Films/>
      </Provider>
    )
  }
}

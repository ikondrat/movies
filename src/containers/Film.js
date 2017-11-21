import React from 'react'
import { Provider } from 'react-redux'
import middleware from '../middleware/'
import AsyncFilm from './AsyncFilm'
import '../style.css'

const store = middleware()

export default (props) => (
  <Provider store={store}>
    <AsyncFilm {...props}/>
  </Provider>
)
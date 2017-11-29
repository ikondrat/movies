import React from 'react';
import ReactDOM from 'react-dom';
import Films from './containers/Films/';
import Film from './containers/Film/';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import { Provider } from 'react-redux'
import middleware from './middleware/'
import './style.css';

const store = middleware()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Route exact path="/" component={Films}/>
          <Route path="/movies/:filmId" render={({match}) => {
            return <Film {...match}/>;
          }}/>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();

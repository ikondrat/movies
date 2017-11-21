import React from 'react';
import ReactDOM from 'react-dom';
import Films from './containers/Home';
import Film from './containers/Film';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


ReactDOM.render(
  <MuiThemeProvider>
    <Router>
      <div>
        <Route exact path="/" component={Films}/>
        <Route path="/movies/:filmId" render={({match}) => {
          return <Film {...match}/>;
        }}/>
      </div>
    </Router>
  </MuiThemeProvider>, 
  document.getElementById('root')
);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import FilmDetails from './components/FilmDetails/';
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
        <Route exact path="/" component={Home}/>
        <Route exact path="/movies/:filmId" component={FilmDetails}/>
      </div>
    </Router>
  </MuiThemeProvider>, 
  document.getElementById('root')
);

registerServiceWorker();

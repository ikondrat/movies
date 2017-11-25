import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
  "left": "50%",
  "top": "50%",
  "position": "absolute",
  "marginLeft": -40,
  "marginTop": -40
};
export default () =>
  <div style={style}>
    <CircularProgress size={80} thickness={5} />
  </div>
import React from 'react';
import PropTypes from 'prop-types';

const Actor = ({name}) => (
  <div>{name}</div>
)

Actor.propTypes = {
  name: PropTypes.string.isRequired
};


export default Actor;
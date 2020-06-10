import React from 'react';

import icon from '../img/loading.svg';

import '../styles/elements/LoadingIcon.scss';

const LoadingIcon = props => (
  <div id="loading">
    <img src={icon} alt="Loading..." />
  </div>
);

export default LoadingIcon;
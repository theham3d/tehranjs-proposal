import html from './index.html'
import style from './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Team from './reactComponent/Team'
import Sponsor from './reactComponent/Sponsor'

function attach() {
  ReactDOM.render(<Team />, document.getElementById('team'));
  ReactDOM.render(<Sponsor />, document.getElementById('sponsor'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  attach();
} else {
  window.addEventListener('DOMContentLoaded', attach, false);
}





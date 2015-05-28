import React from 'react';

import App from './app';

document.addEventListener('DOMContentLoaded', function() {
  let items = [
    'one',
    'two',
    'three',
    'pancakes'
  ];
  React.render(
    <App items={items}></App>,
    document.getElementById('container')
  );
});


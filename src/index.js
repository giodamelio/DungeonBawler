import React from 'react';

class App extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  React.render(
    <App></App>,
    document.getElementById('container')
  );
});


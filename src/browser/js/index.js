import React from 'react';

class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  React.render(<App></App>, document.body);
});


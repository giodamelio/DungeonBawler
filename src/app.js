import React from 'react';

export default class App extends React.Component {
  render() {
    return <ul>
      {this.props.items.map(function(item, index) {
        return <li key={index}>{item}</li>;
      })}
    </ul>;
  }
}


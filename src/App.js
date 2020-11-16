import React, { Component } from 'react';
import Articles from './articles/component/Articles';
class App extends Component {
  
  render() { 
    return ( 
      <>
        <h1>Welcome to Blogy</h1>
        <Articles />
      </>
     );
  }
}
 
export default App;


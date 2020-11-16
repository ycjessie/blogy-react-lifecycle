import React, { Component } from 'react';
import Articles from './articles/component/Articles';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      articles:[
        {title:'T1',author:'A1', content:'C1'},
        {title:'T2',author:'A2', content:'C2'},
        {title:'T3',author:'A3', content:'C3'},
        {title:'T4',author:'A4', content:'C4'}
      
      
      ],
    }
  }
  
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


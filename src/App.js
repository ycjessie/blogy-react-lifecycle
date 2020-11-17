import React, { Component } from 'react';
import { Route ,Link} from 'react-router-dom';
//Route to trigger Path; link to triggle URL
import Articles from './articles/component/Articles';
import About from './pages/component/About'
import Team from './pages/component/Team'
import Nav from './shared/component/Nav'
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
  setArticles=(articles)=>{
    this.setState({articles:articles});

  }
  render() { 
    return ( 
      <>
        {/* <Nav /> */}
        <Route path='/' component={Nav} />
        {/* <Link to='/about'>About Us </Link>
        {'|'}
        <Link to='/team'>Team</Link> */}

        <h1>Welcome to Blogy</h1>

        {/* <h3>{process.env.REACT_APP_BASE_URL}</h3> */}
        {/* <About /> */}
        <Route path='/about' component={About} />
        <Route path='/team' component={Team} />
        <Articles articles={this.state.articles}
        setArticles={this.setArticles}/>
      </>
     );
  }
}
 
export default App;


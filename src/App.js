import React,{Component} from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';



class App extends Component{

  renderA =() =><h1>Customer container</h1>;
  renderB =() =><h1>Customer list container</h1>;
  renderC =() =><h1>Customer new container</h1>;


  render(){

    return (
      <Router>
      <div className="App">
          

          <Route exact path="/" component={HomeContainer}/>
          <Route exact path="/customers" component={this.renderA}/>
          <Switch>
            <Route  path="/customers/new" component={this.renderC}/>
            <Route  path="/customers/:dni" component={this.renderB}/>
          </Switch>
          

      </div>
      </Router>  
    )


  }

}

export default App;
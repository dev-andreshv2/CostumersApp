import React,{Component} from 'react';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';



class App extends Component{

  renderA =() =><CustomersContainer></CustomersContainer>;
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
            <Route  path="/customers/:dni" render={ props =><CustomerContainer dni={props.match.params.dni}/> }/>
          </Switch>
          

      </div>
      </Router>  
    )


  }

}

export default App;
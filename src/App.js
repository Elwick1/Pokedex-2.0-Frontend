import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


export default class App extends React.Component {

  state = {
    showMore : false,
    spin : false
  }

  handleClick = () => {
    this.setState({
      showMore : !this.state.showMore
    })
  }

  spin = () => {
    this.setState({
      spin : true
    })
  }

  render() {
    return(

      // <div>
      //   <Switch>
        // <Route path="/newGame" component={newGame}></Route>
        // <Route path="/continue" component={continueGame}></Route>
        /* <Link key={"newGame"} to={"/newGame"}>
           <li>New Game</li>
           </Link> */
           /* </Switch>
      </div> */

      <div className="App">
      <header className="App-header">
       <div className="container">
         <h1 onClick={this.spin}> Welcome to the world of Pokemon!</h1>
         <button className="button1" onClick={this.handleClick}> Start </button>
         {this.state.showMore === true ? (
         <ul>
           <li>
           New Game
           </li>
           <li>
             Continue
           </li>
         </ul> )
         : null }
       </div>
      </header>
    </div>
  
  );
};
}


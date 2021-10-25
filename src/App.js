import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Patient from "./components/Patients";
import React, { Component } from 'react'
class App extends Component{
  render(){
    return (
      <div className="App">
      <Router>
        <Switch>
        <Route path="/patient">
        <Patient patients={this.state.patients} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </div>
    );
  }

  state = {
    patients: []
  }
  componentDidMount() {
    fetch('./Patient.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ patients: data.entry})
    })
    .catch(console.log)
  }
}

export default App;

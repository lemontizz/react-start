import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/font-awesome.css';
import './styles/common.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import Manage from './routes/Manage/Manage';
import Prompt from './components/Prompt/Prompt.js';
import Loading from './components/Loading/Loading.js';

const NoMatch = () => {
  return (
      <div>
        NoMatch
      </div>
    )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/manage">Manage</Link></li>
            <li><Link to="/anage">Manage</Link></li>
          </ul>
          <Prompt></Prompt>
          <Loading></Loading>
          <hr/>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/manage" component={Manage} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
*/
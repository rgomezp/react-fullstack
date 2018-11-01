import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from './SignupPage/SignupPage';

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{color:'red'}} >Home</NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{color:'red'}} to="/signup/">Signup</NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{color:'red'}} to="/login/">Login</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login/" component={LoginPage} />
        <Route exact path="/signup/" component={SignupPage} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Dashboard, Login, Products, Users, ErrorPage } from "./Screens";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Dashboard} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;

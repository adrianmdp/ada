import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Tasks, Users } from 'screens'


const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/tasks" component={Tasks} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

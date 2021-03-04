import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main, Layout } from './components'
import { Tasks } from './screens'
import { ListTasks } from './screens/ListTasks'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/tasks" component={ Tasks } />
          <Route path="/users" component={ Users } />
        </Switch>
      </Router>
    </>
  );
}

export default App;

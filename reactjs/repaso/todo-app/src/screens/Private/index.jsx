import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Tasks } from './Tasks'
import { Users } from './Users'

const Private = () => {
    return (
        <Router>
            <Switch>
                <Route path="/tasks" component={Tasks} />
                <Route path="/users" component={Users} />
            </Switch>
        </Router>
    )

}

export { Private }
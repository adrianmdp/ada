import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Add } from './Add'
import { Update } from './Update'
import { List } from './List'

const Tasks = () => {

    return (
        <Switch>
            <Route path="/tasks/add" component={Add} exact />
            <Route path="/tasks/update" component={Update} exact />
            <Route path="/tasks/" component={List} />
        </Switch>
    )

}

export { Tasks }
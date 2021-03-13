import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Add} from './Add'
import {List} from './List'
import {Update} from './Update'


const Users = () => {

    return (
        <Switch>
            <Route path="/users/add" component={Add} />
            <Route path="/users/update" component={Update} />
            <Route path="/users/" component={List} />
        </Switch>
    )

}

export { Users }
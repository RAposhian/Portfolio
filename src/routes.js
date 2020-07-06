import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './Components/Landing'

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
    </Switch>
)
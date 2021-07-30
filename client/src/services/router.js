import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import LandingPage from '../pages/landing';
import Room from '../pages/room';
import NotFound from '../pages/notFound';

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path='/room/:id' component={Room}/>
            <Route exact path='/' component={LandingPage}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

export default AppRouter;
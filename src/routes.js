import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
    );
}

import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Git from './pages/Git';

export default function Routes() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/git" component={Git} />
            </Switch>
        </HashRouter>
    );
}

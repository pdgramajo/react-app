import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Info from './pages/info';
import Generic from './pages/Generic';
import Elements from './pages/Elements';

const NoMatch = ({ location }) => (
  <div>
    <h3>
        No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={Info} />
      <Route path="/about" component={Generic} />
      <Route exact path="/contact" component={Elements} />
      {/* <Route path="/about" component={About} />
      <Route exact path="/contact" component={Contact} /> */}
      <Route component={NoMatch} />
    </Switch>
  </div>
);


import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;
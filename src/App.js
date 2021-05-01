import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Homepage from './pages/homepage/homepage.component';

const LiverPage = () => (
<div>
  <h1>LIVER PAGE</h1>
</div>
);

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/liver' component={LiverPage}/>
      </Switch>
    </div>
  );
}

export default App;

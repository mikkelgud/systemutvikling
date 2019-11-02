import React from 'react';
import './App.css';
import Navb from './components/Navb';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navb/>
      <Switch>
        {/* <Route path="" exact component={}/> */}
      </Switch>
    </div>
  );
}

export default App;

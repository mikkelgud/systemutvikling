import React from 'react';
import './App.css';
import Navb from './components/Navb';
import { Switch, Route } from 'react-router-dom';
import Themes from './components/Themes';
import Oblig from './components/Obligs';
import ObligOne from './components/ObligOne'
import ObligTwo from './components/ObligTwo'
import ObligThree from './components/ObligThree'

function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/" exact component={Navb}/>
    <Route path="/valg" exact component={Themes}/>
    <Route path="/valg/obligger" exact component={Oblig}/>

    <Route path="/valg/obligger/oblig-en" exact component={ObligOne}/> 
    <Route path="/valg/obligger/oblig-to" exact component={ObligTwo}/> 
    <Route path="/valg/obligger/oblig-tre" exact component={ObligThree}/> 
    </Switch>
    </div>
  );
}

export default App;

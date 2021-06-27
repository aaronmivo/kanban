import React from 'react';
import {Switch, Route} from "react-router-dom"

//components
import Homepage from "./components/Homepage/Homepage"
import Board from "./components/Board/Board"
import Settings from "./components/Settings/Settings"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path ="/">
            <Homepage/>
          </Route>
          <Route exact path ="/board">
            <Board/>
          </Route>
          <Route exact path ="/settings">
            <Settings/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;

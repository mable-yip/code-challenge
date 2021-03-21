import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import TodoPage from "./component/TodoPage"
import AboutPage from "./component/AboutPage"
import TodoItem from './component/TodoItem'
import NavBar from "./Styling/NavBar"

function App() {
  return (
    <React.Fragment> 
      <NavBar />
      <Switch>
        <Route exact path="/todo"> <TodoPage /></Route>
        <Route exact path="/todo/:todoIndex"> <TodoItem /></Route>
        <Route exact path="/about"> <AboutPage /></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

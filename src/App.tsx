import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import TodoPage from "./component/TodoPage"
import AboutPage from "./component/AboutPage"
import TodoItemDetail from './component/TodoItemDetail'
import NavBar from "./Styling/NavBar"

const App = () => {
  return (
    <React.Fragment> 
      <NavBar />
      <Switch>
        <Route exact path="/todo"> <TodoPage /></Route>
        <Route exact path="/todo/:todoId"> <TodoItemDetail /></Route>
        <Route exact path="/about"> <AboutPage /></Route>
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;

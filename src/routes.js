import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Initial from './pages/Inicio'
import Login from './pages/Login'
import Screening from './pages/Screening'
import QuestionName from './pages/QuestionName'

function routes() {
    return (
      <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={Initial} path="/initial" />
        <Route component={Login} path="/login" />
        <Route component={Screening} path="/screening" />
        <Route component={QuestionName} path="/questionname" />
      </BrowserRouter>
    );
  }
  
  export default routes;
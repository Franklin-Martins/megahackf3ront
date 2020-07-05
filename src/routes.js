import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Initial from './pages/Inicio'

function routes() {
    return (
      <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={Initial} path="/initial" />
      </BrowserRouter>
    );
  }
  
  export default routes;
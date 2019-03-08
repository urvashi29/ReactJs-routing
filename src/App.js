import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import Home from './navbar/Home'
import Contact from './navbar/Contact'
import About from './navbar/About'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/contact' component={Contact}></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

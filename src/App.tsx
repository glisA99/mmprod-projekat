import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Tours from './components/Tours';
import {ture} from './components/TestTour';
import TourPage from './components/TourPage';
import { ITour } from './components/Tour';

function App() {

  const _ture = ture;

  const getTour = (id: number) => {
    return _ture.find(tour => tour.id === id) as ITour;
  }

  return (
    <Router>
      <div>
        <Navbar />
        
        <Switch>
          <Route path='/contact'>
            
          </Route>
          <Route path='/aboutus'>
            
          </Route>
          <Route path='/tours/:id'>
            <TourPage getTour={getTour} />
          </Route>
          <Route path='/tours'>
            <Tours tours={_ture}/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;

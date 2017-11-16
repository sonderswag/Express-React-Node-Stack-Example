import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={IndexItem} />
      <Route path='/add-item' component={AddItem} />
    </div>
  </Router>
  ,document.getElementById('root'));
registerServiceWorker();

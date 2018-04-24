import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';

import Button from '../Components/Button';

ReactDOM.render((
    <Router>
      <Route path="/" component={Button} />
    </Router>
  ), document.getElementById('root')
)

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Import styles antd
import 'antd/dist/antd.min.css';

// Layouts
import Layout from './Components/Layouts/Layout';

// Routes
import Home from './Routes/Home';
import Transaction from './Routes/Transaction';

const App = () =>
(
  <Layout>
    <Router>
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/transactions'>
            <Transaction />
          </Route>
      </Switch>
    </Router>
  </Layout>
);

export default App;
import React from 'react';
import { Route } from 'react-router-dom';
import FormGenerator from './components/pages/FormGenerator';

const App = () => (
<div>
  <Route path='/' exact component={FormGenerator}/>
</div>
);

export default App;

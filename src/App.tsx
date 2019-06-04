import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './mock';
import './App.scss';
import Layout1 from './layouts/Layout1';

const App: React.FC = () => {

  return (
      <BrowserRouter>
        <Layout1/>
      </BrowserRouter>
  );
};

export default App;

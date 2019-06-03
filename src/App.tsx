import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Layout1 from './layouts/Layout1';

const App: React.FC = () => {

  return (
      <BrowserRouter>
        <Layout1/>
        <div className="back-to-top" id="back-to-top">
          <span>回到顶部</span>
        </div>
      </BrowserRouter>
  );
};

export default App;

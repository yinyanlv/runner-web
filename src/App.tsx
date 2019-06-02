import React from 'react';
import './App.scss';
import Layout1 from './layouts/Layout1';

const App: React.FC = () => {
  return (
      <div id="app">
        <Layout1/>
        <div className="back-to-top" id="back-to-top">
          <span>回到顶部</span>
        </div>
      </div>
  );
};

export default App;

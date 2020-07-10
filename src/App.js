import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Quests } from './pages/Quests/Quests';
import Fants from './pages/Fants/Fants';
import Layout from './components/Layout/Layout';
import Menu from './pages/Menu/Menu';
import Poses from './pages/Poses/Poses';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Menu} />
          <Route exact path="/fants" component={Fants} />
          <Route path="/quests" component={Quests} />
          <Route path="/poses" component={Poses} />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

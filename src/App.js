import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Quests } from './pages/Quests/Quests';
import Fants from './pages/Fants/Fants';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <HashRouter>
        <Layout>
          <Route exact path="/">
            <Fants />
          </Route>
          <Route path="/quests">
            <Quests />
          </Route>
        </Layout>
      </HashRouter>
    </>
  );
}

export default App;

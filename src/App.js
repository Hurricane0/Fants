import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Quests } from './pages/Quests/Quests';
import Fants from './pages/Fants/Fants';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Fants} />
          {/* <Fants /> */}
          {/* </Route> */}
          <Route path="/quests" component={Quests} />
          {/* <Quests />
          </Route> */}
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

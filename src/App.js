import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Quests } from './pages/Quests/Quests';
import Fants from './pages/Fants/Fants';
import Layout from './components/Layout/Layout';
import Menu from './pages/Menu/Menu';
import Poses from './pages/Poses/Poses';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    setIsRemoved(false);
    const timer = setTimeout(() => {
      setIsRemoved(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
        {!isRemoved && <Loader isLoading={isLoading} />}
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

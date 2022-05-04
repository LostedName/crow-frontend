import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { useTypedSelector } from './hooks/useTypedSelector';
import {defaultRoutes, unloggedRoutes, loggedRoutes} from './routes';
import './styles/app.scss';

function App() {
  const isAuth = useTypedSelector((state) => state.userStore.isAuth);
  return (
    <>
      <Header />
      <Routes>
        {
          (isAuth) ?
          loggedRoutes.map((route) => {
            const Element: React.FC = route.element;
            return <Route path={route.path} element={<Element/>}/>;
          })
          : unloggedRoutes.map((route) => {
            const Element: React.FC = route.element;
            return <Route path={route.path} element={<Element/>}/>;
          })
        }
        {
          defaultRoutes.map((route) => {
            const Element: React.FC = route.element;
            return <Route path={route.path} element={<Element/>}/>;
          })
        }
      </Routes>
      <Footer />
    </>
  );
}

export default App;

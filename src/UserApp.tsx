import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { useTypedSelector } from './hooks/useTypedSelector';
import {defaultRoutes, unloggedRoutes, loggedRoutes} from './routes/userRoutes';
import './styles/app.scss';
import { useActions } from './hooks/useActions';
import LoadingScreen from './components/loadingScreen/LoadingScreen';

function UserApp() {
  const {isAuth, isAppLoading} = useTypedSelector((state) => state.userStore);
  const {loadUserAsync} = useActions();
  useEffect(() => {
    loadUserAsync();
  }, []);
  console.log("APP");
  return (
    isAppLoading ? <LoadingScreen />
    :
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

export default UserApp;

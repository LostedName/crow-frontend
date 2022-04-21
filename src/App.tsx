import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import routes from './routes';
import './styles/App.scss';
function App() {
  return (
    <>
      <Header />
      <Routes>
        {
          routes.map((route) => {
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

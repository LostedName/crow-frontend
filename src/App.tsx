import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { LoginPage, MainPage, RegisterPage } from './pages';

import './styles/App.scss';
function App() {
  return (<>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/registration" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </>
  );
}

export default App;

import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<AboutUs />} />
          <Route path='/about' exact element={<AboutUs />} />
          <Route path='/work' exact element={<OurWork />} />
          <Route path='/work/:id' exact element={<MovieDetail />} />
          <Route path='/contact' exact element={<ContactUs />} />
        </Routes>
        <Outlet />
      </AnimatePresence>
    </div>
  );
}

export default App;

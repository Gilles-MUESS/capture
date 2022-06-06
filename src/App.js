import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Routes, Route, Outlet } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' exact element={<AboutUs />} />
        <Route path='/about' exact element={<AboutUs />} />
        <Route path='/work' exact element={<OurWork />} />
        <Route path='/work/:id' exact element={<MovieDetail />} />
        <Route path='/contact' exact element={<ContactUs />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;

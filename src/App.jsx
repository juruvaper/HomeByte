import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeGallery from './Pages/HomeGallery';
import HomeDetail from './Pages/HomeDetail';
import Logon from './Components/Logon';
import Navigation from './Components/Navigation';
import React from 'react';
import Blogs from './Pages/Blogs';

const AppContent = () => {
  const location = useLocation();
  const hideNav = location.pathname === '/login';

  return (
    <div className='w-full text-white'>
      {!hideNav && <Navigation />}
      <Routes>
        <Route path='/' element={<HomeGallery/>}/>
        <Route path="/login" element={<Logon/>} />
        <Route path="/details" element={<HomeDetail/>} />
        <Route path="/home" element={<HomeGallery />}> </Route>
        <Route path="/home/homedetail" element={<HomeDetail />} />
        <Route path="/login" element={<Logon />} />
        <Route path="/blogs" element={<Blogs/>}/>
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

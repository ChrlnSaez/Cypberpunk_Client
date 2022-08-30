import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateLayout from './components/layout/PrivateLayout';
import PublicLayout from './components/layout/PublicLayout';
import { useAuth } from './context/authContext';
import About from './pages/About';
import AdminDashboard from './pages/admin/AdminDashboard';
import Contacts from './pages/Contacts';
import Landing from './pages/Landing';

const App = () => {
  const auth = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contacts />} />
        </Route>
        <Route element={<PrivateLayout isAllowed={auth?.token} />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Route>
        <Route element={<PrivateLayout isAllowed={auth?.token} />}>
          <Route path='/student/dashboard' element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

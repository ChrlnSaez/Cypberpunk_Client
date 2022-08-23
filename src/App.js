import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import SideNavbar from './components/SideNavbar';
import Profile from './components/Profile';
import Assignment from './components/Assignment';
import Attendance from './components/Attendance';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <SideNavbar />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/assignment' element={<Assignment />} />
          <Route path='/attendance' element={<Attendance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

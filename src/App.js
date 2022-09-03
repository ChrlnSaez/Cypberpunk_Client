import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateLayout from './components/layout/PrivateLayout';
import PublicLayout from './components/layout/PublicLayout';
import StudentProfile from './pages/student/StudentProfile';
import { useAuth } from './context/authContext';
import About from './pages/About';
import AdminClassroom from './pages/admin/AdminClassroom';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminStudents from './pages/admin/AdminStudents';
import AdminTeacher from './pages/admin/AdminTeacher';
import Contacts from './pages/Contacts';
import Landing from './pages/Landing';
import StudentAttendance from './pages/student/StudentAttendance';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import TeacherStudents from './pages/teacher/TeacherStudents';

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
          <Route path='/admin/classrooms' element={<AdminClassroom />} />
          <Route path='/admin/students' element={<AdminStudents />} />
          <Route path='/admin/teachers' element={<AdminTeacher />} />
        </Route>
        <Route element={<PrivateLayout isAllowed={auth?.token} />}>
          <Route path='/student/profile' element={<StudentProfile />} />
          <Route path='/student/attendance' element={<StudentAttendance />} />
        </Route>
        <Route element={<PrivateLayout isAllowed={auth?.token} />}>
          <Route path='/teacher/dashboard' element={<TeacherDashboard />} />
          <Route path='/teacher/students' element={<TeacherStudents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

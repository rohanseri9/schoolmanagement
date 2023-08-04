import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import EmployeeManagement from './components/EmployeeManagement';
import Employee from './components/Employee';
import EditEmpl from './components/EditEmpl';
import Faculty from './components/Faculty';
import Course from './components/Course';
function App() {
  return (
  <Router>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-4">
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route path="/employees" element={<EmployeeManagement />} />
            <Route path="/course" element={<Course />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/edit-employee/:id" element={<EditEmpl />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;

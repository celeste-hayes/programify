import React from 'react';
import Sidebar from './components/SideBar';
import { Outlet, useLocation } from 'react-router-dom';
import SignUp from './pages/home';


export default function App() {


  const location = useLocation();
  const showSidebar = ['/dashboard', '/learn', '/code', '/connect'].includes(location.pathname);
  return (
    <div>
      <SignUp />

    </div>,

    <div className="d-flex">
      {showSidebar && <Sidebar />}
      <div className="flex-grow-1 p-3">
        <Outlet />
      </div>
    </div>
  );

}
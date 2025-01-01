import React from 'react';
import Sidebar from './components/SideBar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        <Outlet />
      </div>
    </div>
  );
}
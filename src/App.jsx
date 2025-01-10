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

        <div style={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        {showSidebar && <Sidebar />}

        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <main
            style={{
              flexGrow: 1,
              overflowY: 'auto',
              padding: '1rem',
              backgroundColor: 'white',
            }}
          >
            <Outlet />
          </main>
        </div>
        </div>
  );
}
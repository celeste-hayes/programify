import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';
import Learn from './pages/learn.jsx';
import Code from './pages/code.jsx';
import Connect from './pages/connect.jsx';
// We will need to create a component to import PrivateRoute

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: (
      //<PrivateRoute> // Need to enable as protected route onces we have the component
        <Dashboard />
      //</PrivateRoute>
    ),
  },
  {
    path: '/learn',
    element: (
      //<PrivateRoute> // Need to enable as protected route onces we have the component
        <Learn />
      //</PrivateRoute>
    ),
  },
  {
    path: '/code',
    element: (
      //<PrivateRoute> // Need to enable as protected route onces we have the component
        <Code />
      //</PrivateRoute>
    ),
  },
  {
    path: '/connect',
    element: (
      //<PrivateRoute> // Need to enable as protected route onces we have the component
        <Connect />
      //</PrivateRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

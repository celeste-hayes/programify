import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';
import Learn from './pages/learn.jsx';
import Code from './pages/code.jsx';
import Connect from './pages/connect.jsx';
import App from './App';
// We will need to create a component to import PrivateRoute


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,

  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element:
          //<PrivateRoute> // Need to enable as protected route onces we have the component
          <Dashboard />
      },
      {
        path: 'learn',
        element:
          //<PrivateRoute> // Need to enable as protected route onces we have the component
          <Learn />
      },
      {
        path: 'code',
        element:
          //<PrivateRoute> // Need to enable as protected route onces we have the component
          <Code />
      },
      {
        path: 'connect',
        element:
          //<PrivateRoute> // Need to enable as protected route onces we have the component
          <Connect />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

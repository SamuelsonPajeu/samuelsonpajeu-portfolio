import React from 'react';
import * as ReactDOM from "react-dom/client";
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Projects from './pages/Projects/my-projects';
import ErrorPage from './pages/Error/error-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  }, 
  {
    path: '/projects',
    element: <Projects />,
    errorElement: <ErrorPage />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();

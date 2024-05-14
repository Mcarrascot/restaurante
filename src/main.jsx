import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'

// Import bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Routes } from './routes';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar routes={Routes} />
    <RouterProvider router={Routes} />
    <Footer />
  </React.StrictMode>
);
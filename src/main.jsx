import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import Update from './components/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/add',
    element:<AddCoffee></AddCoffee>
  },
  {
    path: '/update',
    element:<Update></Update>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

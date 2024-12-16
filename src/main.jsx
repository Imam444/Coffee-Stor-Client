import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import Update from './components/Update.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import User from './components/User.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:4000/coffee"),
  },
  {
    path: "/add",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({params}) => fetch(`http://localhost:4000/coffee/${params.id}`)
  },
  {
    path: '/signup',
    element:<SignUp></SignUp>
  },
  {
    path: '/signin',
    element:<SignIn></SignIn>
  },
  {
    path: '/user',
    element: <User></User>,
    loader: () => fetch('http://localhost:4000/user')
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

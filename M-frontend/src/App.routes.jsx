import {createBrowserRouter} from 'react-router'
import Login from './features/Auth/pages/Login'
import Register from './features/Auth/pages/Register'
import Home from './features/Auth/home/pages/home'
import Protected from './features/Auth/Components/Protected'


export const router = createBrowserRouter([
  {
    path: "/",
    element: <protected><Home /></protected>
  },
  {
    path: "/login",
    element: <Login />,   // ✅ THIS
  },
  {
    path: "/register",
    element: <Register />, // optional
  },
]);
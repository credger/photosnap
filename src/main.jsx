import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import Features from './routes/Features';
import Pricing from './routes/Pricing'
import Stories from './routes/Stories'
import ComingSoon from './routes/ComingSoon';


const router = createBrowserRouter([
  {
    path: "/photosnap/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/photosnap/features",
    element: <Features />,
  },

  {
    path: "/photosnap/pricing",
    element: <Pricing />,
  },

  {
    path: "/photosnap/stories",
    element: <Stories />,
  },

  {
    path: "/photosnap/comingsoon",
    element: <ComingSoon />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



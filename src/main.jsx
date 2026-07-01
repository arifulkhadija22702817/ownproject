import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './navbar/Navbar.jsx';
import ErrorElement from './error/ErrorElement.jsx';
import Home from './home/Home.jsx';
import About from './about/About.jsx';
import Root from './root/Root.jsx';
import Projects from './projects/Projects.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "project",
        element: <Projects></Projects>
      }
    ],
  }
],
  {
    basename: "/ownproject/"
  }
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

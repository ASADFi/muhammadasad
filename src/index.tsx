import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./views/Home";
import About from "./views/About";
import { register } from 'swiper/element/bundle';
import Projects from "./views/Projects";
import ContactUs from "./views/ContactUs";
import ProjectDetail from "./views/ProjectDetail";

register();

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="project/:projectId" element={<ProjectDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<ContactUs />} />
        </Route>
    )
)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

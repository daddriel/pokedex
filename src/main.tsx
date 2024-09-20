import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import {Flowbite } from "flowbite-react";
import './index.css'
import { router } from './routes/root';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Flowbite>
      <RouterProvider router = {router}></RouterProvider>
    </Flowbite>
  </StrictMode>,
)

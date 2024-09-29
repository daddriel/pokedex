import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import { router } from './routes/root';


createRoot(document.getElementById('root')!).render(

    <StrictMode>
        <main className="min-h-lvh dark:bg-gray-900">
            <RouterProvider router={router}></RouterProvider>
        </main>
    </StrictMode>
    ,
)

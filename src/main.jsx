import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes';
import BookCon from './Context/BookCon';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookCon>
      <RouterProvider router={router} />,
      <ToastContainer />
    </BookCon>
    
  </StrictMode>,
)

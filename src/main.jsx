import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FoodCartProvidor from './Context/FoodCartProvidor'
import { RouterProvider } from 'react-router'
import router from './Router/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FoodCartProvidor>
    <RouterProvider router={router}/>
   </FoodCartProvidor>
  </StrictMode>,
)

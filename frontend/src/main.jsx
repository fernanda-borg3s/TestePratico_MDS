import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import PaginaAcesso from './pages/PaginaAcesso/PaginaAcesso.jsx'
import App from './App.jsx'
import PaginaPainel from './pages/PaginaPainel/PaginaPainel.jsx'
import PaginaRegistro from './pages/PaginaRegistro/PaginaRegistro.jsx'

const router = createBrowserRouter([
  {
    path: '/acesso',
    element: <PaginaAcesso/>,
    // errorElement:<ErrorPage/>,
  },
   {
    path: '/registro',
    element: <PaginaRegistro/>,
    // errorElement:<ErrorPage/>,
  },
  {
    path:"/painel",
    element: <PaginaPainel/>,
    // errorElement:<ErrorPage/>,
  },

]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

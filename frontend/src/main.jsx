import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import PaginaAcesso from './pages/PaginaAcesso/PaginaAcesso.jsx'
import PaginaPainel from './pages/PaginaPainel/PaginaPainel.jsx'
import PaginaRegistro from './pages/PaginaRegistro/PaginaRegistro.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'

const router = createBrowserRouter([
  {
    path: '/acesso',
    element: <PaginaAcesso/>,
  },
   {
    path: '/registro',
    element: <PaginaRegistro/>,
  },
  {
    path:"/painel",
    element: <PaginaPainel/>,
  },
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
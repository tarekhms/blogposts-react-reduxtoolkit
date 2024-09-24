import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import './index.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />} >
    <Route index element={<HomePage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
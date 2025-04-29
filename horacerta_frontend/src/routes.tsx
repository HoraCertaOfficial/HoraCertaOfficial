import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home';
import Layout from './components/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]); 
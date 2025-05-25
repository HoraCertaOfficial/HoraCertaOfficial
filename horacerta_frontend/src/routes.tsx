import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home';
import Layout from './components/Layout/Layout';
import Sobre from './pages/Sobre/sobre';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sobre',
        element: <Sobre />,
      },
    ],
  },
]); 
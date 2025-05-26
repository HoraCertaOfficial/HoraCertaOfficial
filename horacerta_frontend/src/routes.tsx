import ComoFunciona from './pages/ComoFunciona/comoFunciona';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Recursos from './pages/Recursos/recursos';
import { CONSTANTES } from './common/constantes';
import Precos from './pages/Precos/precos';
import Sobre from './pages/Sobre/sobre';
import Home from './pages/Home/home';

export const router = createBrowserRouter([
  {
    path: CONSTANTES.ROUTE_HOME,
    element: <Layout />,
    children: [
      { path: CONSTANTES.ROUTE_HOME, element: <Home /> },
      { path: CONSTANTES.ROUTE_SOBRE, element: <Sobre /> },
      { path: CONSTANTES.ROUTE_PRECOS, element: <Precos /> },
      { path: CONSTANTES.ROUTE_RECURSOS, element: <Recursos /> },
      { path: CONSTANTES.ROUTE_COMO_FUNCIONA, element: <ComoFunciona /> },
    ],
  },
]); 
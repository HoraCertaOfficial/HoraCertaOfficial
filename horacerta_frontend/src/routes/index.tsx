import Notificacoes from '../pages/Configuracao/Telas/Notificacoes/notificacoes';
import Perguntas from '../pages/Configuracao/Telas/Perguntas/perguntas';
import Politica from '../pages/Configuracao/Telas/Politica/politica';
import Feriados from '../pages/Configuracao/Telas/Feriados/feriados';
import Tutorial from '../pages/Configuracao/Telas/Tutorial/tutorial';
import RegistrarPonto from '../pages/RegistrarPonto/registrarPonto';
import Jornada from '../pages/Configuracao/Telas/Jornada/jornada';
import Suporte from '../pages/Configuracao/Telas/Suporte/suporte';
import Perfil from '../pages/Configuracao/Telas/Perfil/perfil';
import Configuracao from '../pages/Configuracao/configuracao';
import ComoFunciona from '../pages/ComoFunciona/comoFunciona';
import Sobre from '../pages/Configuracao/Telas/Sobre/sobre';
import Relatorios from '../pages/Relatorios/relatorios';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';
import Recursos from '../pages/Recursos/recursos';
import Registro from '../pages/Registro/registro';
import BemVindo from '../pages/BemVindo/bemvindo';
import { CONSTANTES } from '../common/constantes';
import Precos from '../pages/Precos/precos';
import Login from '../pages/Login/login';
import Home from '../pages/Home/home';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

// Rotas públicas (não precisam de autenticação)
const publicRoutes = [
  {path: CONSTANTES.ROUTE_LOGIN, element: <Login />},
  {path: CONSTANTES.ROUTE_REGISTRO, element: <Registro />},
  {path: CONSTANTES.ROUTE_HOME, element: <Home />},
  {path: CONSTANTES.ROUTE_COMO_FUNCIONA, element: <ComoFunciona />},
  {path: CONSTANTES.ROUTE_PRECOS, element: <Precos />},
  {path: CONSTANTES.ROUTE_RECURSOS, element: <Recursos />},
];

// Rotas protegidas (precisam de autenticação)
const protectedRoutes = [
  {path: CONSTANTES.ROUTE_CONFIGURACAO_NOTIFICACOES, element: <Notificacoes />},
  {path: CONSTANTES.ROUTE_CONFIGURACAO_PERGUNTAS, element: <Perguntas />},
  {path: CONSTANTES.ROUTE_CONFIGURACAO_FERIADOS, element: <Feriados />},
  {path: CONSTANTES.ROUTE_CONFIGURACAO_TUTORIAL, element: <Tutorial />},
  {path: CONSTANTES.ROUTE_CONFIGURACAO_POLITICA, element: <Politica />},
  {path: CONSTANTES.ROUTE_REGISTRAR_PONTO, element: <RegistrarPonto />},
  {path: CONSTANTES.ROUTE_CONFIGURACAO_JORNADA, element: <Jornada />},
  {path: CONSTANTES.ROUTE_CONFIGURACAO_SUPORTE, element: <Suporte />},
  {path: CONSTANTES.ROUTE_CONFIGURACAO_PERFIL, element: <Perfil />},
  {path: CONSTANTES.ROUTE_CONFIGURACAO, element: <Configuracao />},
  {path: CONSTANTES.ROUTE_CONFIGURACAO_SOBRE, element: <Sobre />},
  {path: CONSTANTES.ROUTE_RELATORIOS, element: <Relatorios />},
  {path: CONSTANTES.ROUTE_DASHBOARD, element: <Dashboard />},
  {path: CONSTANTES.ROUTE_BEM_VINDO, element: <BemVindo />},
].map(route => ({
  ...route,
  element: <PrivateRoute>{route.element}</PrivateRoute>
}));

// Combinando todas as rotas
export const router = createBrowserRouter([
  // Rota raiz deve apontar para Home, não para Login
  {
    path: '/',
    element: <Home />
  },
  ...publicRoutes,
  ...protectedRoutes,
]);

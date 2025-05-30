import { AiOutlineHome, AiOutlineDashboard, AiOutlineSetting } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoStatsChartOutline } from 'react-icons/io5';
import { CONSTANTES } from '../../common/constantes';
import { FiPlusCircle } from 'react-icons/fi';
import styles from './menu.module.css';


const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {/* Versão Mobile */}
      <nav className={styles.mobileNav}>
        <Link to={CONSTANTES.ROUTE_BEM_VINDO} className={location.pathname === CONSTANTES.ROUTE_BEM_VINDO ? styles.active : ''}> <AiOutlineHome size={24} /> <span>{CONSTANTES.TITULO_MENU_HOME}</span></Link>
        <Link to={CONSTANTES.ROUTE_DASHBOARD} className={location.pathname === CONSTANTES.ROUTE_DASHBOARD ? styles.active : ''}> <AiOutlineDashboard size={24} /> <span>{CONSTANTES.TITULO_MENU_DASHBOARD}</span></Link>
        <button className={`${styles.addButton} ${location.pathname === CONSTANTES.ROUTE_REGISTRAR_PONTO ? styles.active : ''}`} onClick={() => navigate(CONSTANTES.ROUTE_REGISTRAR_PONTO)} > <FiPlusCircle size={32} /></button>
        <Link to={CONSTANTES.ROUTE_RELATORIOS} className={location.pathname === CONSTANTES.ROUTE_RELATORIOS ? styles.active : ''}> <IoStatsChartOutline size={24} /> <span>{CONSTANTES.TITULO_MENU_RELATORIOS}</span></Link>
        <Link to={CONSTANTES.ROUTE_CONFIGURACAO} className={location.pathname === CONSTANTES.ROUTE_CONFIGURACAO ? styles.active : ''}> <AiOutlineSetting size={24} /> <span>{CONSTANTES.TITULO_MENU_AJUSTES}</span></Link>
      </nav>

      {/* Versão Desktop */}
      <nav className={styles.desktopNav}>
        <div className={styles.navContent}>
          <Link to={CONSTANTES.ROUTE_BEM_VINDO} className={location.pathname === CONSTANTES.ROUTE_BEM_VINDO ? styles.active : ''}> <AiOutlineHome size={24} /> <span>{CONSTANTES.TITULO_MENU_HOME}</span></Link>  
          <Link to={CONSTANTES.ROUTE_DASHBOARD} className={location.pathname === CONSTANTES.ROUTE_DASHBOARD ? styles.active : ''}> <AiOutlineDashboard size={24} /> <span>{CONSTANTES.TITULO_MENU_DASHBOARD}</span></Link>
          <button className={styles.addButton} onClick={() => navigate(CONSTANTES.ROUTE_REGISTRAR_PONTO)}> <FiPlusCircle size={32} /> </button>
          <Link to={CONSTANTES.ROUTE_RELATORIOS} className={location.pathname === CONSTANTES.ROUTE_RELATORIOS ? styles.active : ''}> <IoStatsChartOutline size={24} /> <span>{CONSTANTES.TITULO_MENU_RELATORIOS}</span></Link>
          <Link to={CONSTANTES.ROUTE_CONFIGURACAO} className={location.pathname === CONSTANTES.ROUTE_CONFIGURACAO ? styles.active : ''}> <AiOutlineSetting size={24} /> <span>{CONSTANTES.TITULO_MENU_AJUSTES}</span></Link>
        </div>
      </nav>
    </>
  );
};

export default BottomNav; 
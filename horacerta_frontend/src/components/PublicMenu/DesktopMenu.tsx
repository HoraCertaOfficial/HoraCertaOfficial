
import { Link } from 'react-router-dom';
import { CONSTANTES } from '../../common/constantes';
import styles from './desktopMenu.module.css';

const DesktopMenu = () => {
  return (
    <div className={styles.navLinks}>
      <Link className={styles.navLink} to={CONSTANTES.RECURSOS}>{CONSTANTES.TITULO_MENU_RECURSOS}</Link>
      <Link className={styles.navLink} to={CONSTANTES.PRECOS}>{CONSTANTES.TITULO_MENU_PRECOS}</Link>
      <Link className={styles.navLink} to={CONSTANTES.COMO_FUNCIONA}>{CONSTANTES.TITULO_MENU_COMO_FUNCIONA}</Link>
      <Link className={styles.primaryButton} to={CONSTANTES.REGISTRO}>{CONSTANTES.BOTAO_COMECAR}</Link>
    </div>
  );
};

export default DesktopMenu; 
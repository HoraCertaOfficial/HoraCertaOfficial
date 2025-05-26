import { Link } from 'react-router-dom';
import { CONSTANTES } from '../../common/constantes';
import styles from './desktopMenu.module.css';
import { AiOutlineClockCircle } from 'react-icons/ai';

const DesktopMenu = () => {
  return (
    <div className={styles.desktopMenuWrapper}>
      <Link className={styles.logo} to={CONSTANTES.HOME} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '1.25rem' }}>
        <AiOutlineClockCircle size={24} />
        {CONSTANTES.TITULO_SITE}
      </Link>
      <div className={styles.navLinks}>
        <Link className={styles.navLink} to={CONSTANTES.RECURSOS}>{CONSTANTES.TITULO_MENU_RECURSOS}</Link>
        <Link className={styles.navLink} to={CONSTANTES.PRECOS}>{CONSTANTES.TITULO_MENU_PRECOS}</Link>
        <Link className={styles.navLink} to={CONSTANTES.COMO_FUNCIONA}>{CONSTANTES.TITULO_MENU_COMO_FUNCIONA}</Link>
        <Link className={styles.primaryButton} to={CONSTANTES.REGISTRO}>{CONSTANTES.BOTAO_COMECAR}</Link>
      </div>
    </div>
  );
};

export default DesktopMenu; 
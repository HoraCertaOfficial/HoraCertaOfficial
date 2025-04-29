import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    empresa: {
      title: 'Empresa',
      links: [
        { text: 'Sobre nós', href: '/sobre' },
        { text: 'Carreiras', href: '/carreiras' },
        { text: 'Segurança', href: '/seguranca' },
        { text: 'Status', href: '/status' },
        { text: 'Termos & privacidade', href: '/termos' },
      ],
    },
    download: {
      title: 'Download',
      links: [
        { text: 'iOS & Android', href: '/mobile' },
        { text: 'Mac & Windows', href: '/desktop' },
        { text: 'Web App', href: '/web' },
      ],
    },
    recursos: {
      title: 'Recursos',
      links: [
        { text: 'Central de Ajuda', href: '/ajuda' },
        { text: 'Preços', href: '/precos' },
        { text: 'Blog', href: '/blog' },
        { text: 'Comunidade', href: '/comunidade' },
        { text: 'Integrações', href: '/integracoes' },
      ],
    },
    horaCerta: {
      title: 'Hora Certa para',
      links: [
        { text: 'Empresas', href: '/empresas' },
        { text: 'Pequenos Negócios', href: '/pequenos-negocios' },
        { text: 'Pessoal', href: '/pessoal' },
      ],
    },
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Hora Certa" />
          </div>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className={styles.footerSection}>
              <h3>{section.title}</h3>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <div className={styles.copyright}>
            © {currentYear} Hora Certa
          </div>
          <div className={styles.bottomLinks}>
            <button className={styles.languageButton}>
              🌐 Português
            </button>
            <a href="/privacidade">Não vender minhas informações</a>
            <a href="/cookies">Configurações de cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
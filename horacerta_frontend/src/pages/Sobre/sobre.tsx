import { useState } from 'react';
import { AiOutlineClockCircle, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { CONSTANTES } from '../../common/constantes';
import { Link } from 'react-router-dom';
import MenuPublic from '../../components/PublicMenu/DesktopMenu';
import styles from './sobre.module.css';

const Sobre = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <AiOutlineClockCircle size={24} />
          {CONSTANTES.TITULO_SITE}
        </div>
        <MenuPublic />
        <motion.button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </motion.button>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                className={styles.mobileMenuOverlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
              />
              <motion.div
                className={styles.mobileMenu}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
              >
                <motion.div
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.05 }
                    },
                    closed: {}
                  }}
                >
                  <Link className={styles.mobileNavLink} to={CONSTANTES.RECURSOS} onClick={toggleMenu}>{CONSTANTES.TITULO_MENU_RECURSOS}</Link>
                  <Link className={styles.mobileNavLink} to={CONSTANTES.PRECOS} onClick={toggleMenu}>{CONSTANTES.TITULO_MENU_PRECOS}</Link>
                  <Link className={styles.mobileNavLink} to={CONSTANTES.COMO_FUNCIONA} onClick={toggleMenu}>{CONSTANTES.TITULO_MENU_COMO_FUNCIONA}</Link>
                  <Link className={styles.mobilePrimaryButton} to={CONSTANTES.REGISTRO} onClick={toggleMenu}>{CONSTANTES.BOTAO_COMECAR}</Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.subtitle}>
              Simplificando a gestão de ponto para você!
            </h1>
          </div>
        </section>

        <section className={styles.sectionRow}>
          <img
            src={CONSTANTES.IMAGE_SOBRE_01}
            alt="Equipe colaborando"
            className={styles.sectionImage}
          />
          <div className={styles.sectionText}>
            <h2>Nossa Missão</h2>
            <p>
              O Hora Certa nasceu com o objetivo de revolucionar a forma como as empresas gerenciam o ponto de seus colaboradores. 
              Nossa missão é simplificar processos, eliminar burocracias e trazer mais eficiência para a gestão de horas trabalhadas.
            </p>
          </div>
        </section>

        <section className={styles.values}>
          <h2>O Que Nos Diferencia</h2>
          <div className={styles.differenceGridTextOnly}>
            <div className={styles.differenceTextCard}>
              <strong>Inovação</strong>
              <p>Buscamos constantemente novas soluções e tecnologias para melhorar a experiência dos nossos usuários.</p>
            </div>
            <div className={styles.differenceTextCard}>
              <strong>Simplicidade</strong>
              <p>Acreditamos que a melhor solução é aquela que resolve problemas complexos de forma simples e intuitiva.</p>
            </div>
            <div className={styles.differenceTextCard}>
              <strong>Confiabilidade</strong>
              <p>Garantimos a segurança e precisão dos dados, mantendo a confiança dos nossos clientes.</p>
            </div>
            <div className={styles.differenceTextCard}>
              <strong>Eficiência</strong>
              <p>Nosso objetivo é otimizar processos e economizar tempo para empresas e colaboradores.</p>
            </div>
          </div>
        </section>

        <section className={styles.sectionRowReverse}>
          <div className={styles.sectionText}>
            <h2>Nossa História</h2>
            <p>
              Fundada em 2024, o Hora Certa surgiu da necessidade de modernizar o sistema de registro de ponto tradicional. 
              Percebemos que muitas empresas ainda utilizavam métodos arcaicos e burocráticos para gerenciar as horas trabalhadas 
              de seus colaboradores, o que gerava perda de tempo e recursos.
            </p>
            <p>
              Com uma equipe apaixonada por tecnologia e inovação, desenvolvemos uma solução completa que atende às necessidades 
              tanto das empresas quanto dos colaboradores, oferecendo uma plataforma moderna, segura e fácil de usar.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80"
            alt="Crescimento e evolução"
            className={styles.sectionImage}
          />
        </section>

        <section className={styles.difference}>
          <h2>O Que Nos Diferencia</h2>
          <div className={styles.differenceGridTextOnly}>
            <div className={styles.differenceTextCard}>
              <strong>Interface Intuitiva</strong>
              <p>Design moderno e fácil de usar, pensado para todos os usuários.</p>
            </div>
            <div className={styles.differenceTextCard}>
              <strong>Segurança Avançada</strong>
              <p>Proteção de dados e conformidade com as normas trabalhistas.</p>
            </div>
            <div className={styles.differenceTextCard}>
              <strong>Suporte Dedicado</strong>
              <p>Equipe especializada pronta para ajudar quando precisar.</p>
            </div>
            <div className={styles.differenceTextCard}>
              <strong>Atualizações Constantes</strong>
              <p>Melhorias contínuas baseadas no feedback dos usuários.</p>
            </div>
          </div>
        </section>

        <section className={styles.sectionRow}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Equipe Hora Certa"
            className={styles.sectionImage}
          />
          <div className={styles.sectionText}>
            <h2>Nossa Equipe</h2>
            <p>
              Contamos com uma equipe diversificada de profissionais apaixonados por tecnologia e inovação. 
              Nossos desenvolvedores, designers e especialistas em RH trabalham juntos para criar a melhor 
              experiência possível para nossos usuários.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sobre; 
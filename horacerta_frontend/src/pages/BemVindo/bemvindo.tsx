import { useEffect, useState } from 'react';
import BottomNav from '../../components/Menu/menu';
import styles from './bemvindo.module.css';
import { motion } from 'framer-motion';
import api from '../../services/api';

interface UserData {
  name: string;
  email: string;
  settings: {
    notifications: {
      email: boolean;
      push: boolean;
    };
    workHours: {
      daily: number;
      weekly: number;
    };
  };
  createdAt: string;
}

const BemVindo = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get<UserData>('/users/profile');
        setUserData(response.data);
        setError(null);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        setError('Erro ao carregar dados do usuário');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const formatDate = () => {
    return new Date().toLocaleDateString('pt-BR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <motion.div 
          className={styles.welcomeContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.welcomeHeader}>
            <span className={styles.welcomeText}>Bem vindo,</span>
            <span className={styles.nameText}>
              {loading ? 'Carregando...' : error ? 'Erro' : (userData?.name || 'Visitante')}
            </span>
          </div>
          <motion.p 
            className={styles.dateText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            {formatDate()}
          </motion.p>
        </motion.div>
      </header>

      <div className={styles.content}>
        <div className={styles.statsContainer}>
          <motion.div 
            className={`${styles.statsCard} ${styles.workCard}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.statsHeader}>
              <div className={styles.dot} />
              <span className={styles.statsLabel}>Horas Trabalhadas</span>
            </div>
            <div className={styles.statsValue}>
              {userData?.settings?.workHours?.daily || '--:--'}
            </div>
            <div className={styles.statsSubtext}>Hoje</div>
          </motion.div>

          <motion.div 
            className={`${styles.statsCard} ${styles.balanceCard}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.statsHeader}>
              <div className={styles.dot} />
              <span className={styles.statsLabel}>Banco de Horas</span>
            </div>
            <div className={styles.statsValue}>
              {'00:00'}
            </div>
            <div className={styles.statsSubtext}>Total</div>
          </motion.div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default BemVindo;
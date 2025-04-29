import * as admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';
import * as dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

// Verifica se as variáveis necessárias existem
if (!process.env.FIREBASE_PROJECT_ID || 
    !process.env.FIREBASE_CLIENT_EMAIL || 
    !process.env.FIREBASE_PRIVATE_KEY) {
  throw new Error('Variáveis de ambiente do Firebase não configuradas');
}

// Inicializa o app do Firebase Admin
const app = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
});

// Exporta instâncias necessárias
export const db = admin.firestore();
export const FieldValue = admin.firestore.FieldValue;
export const adminAuth = getAuth(app); 
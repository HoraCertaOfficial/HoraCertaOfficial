import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { adminAuth } from '../config/firebase.config';

@Injectable()
export class FirebaseAuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split('Bearer ')[1];
      
      if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
      }

      const decodedToken = await adminAuth.verifyIdToken(token);
      req['user'] = decodedToken;
      
      next();
    } catch (error) {
      console.error('Erro na autenticação:', error);
      return res.status(401).json({ message: 'Token inválido' });
    }
  }
} 
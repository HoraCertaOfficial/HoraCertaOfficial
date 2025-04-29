import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { adminAuth } from '../config/firebase.config';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(Strategy, 'firebase') {
  async validate(req: any) {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      throw new Error('No token found');
    }

    try {
      const decodedToken = await adminAuth.verifyIdToken(token);
      return { uid: decodedToken.uid, email: decodedToken.email };
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
} 
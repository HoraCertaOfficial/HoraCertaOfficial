import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';

@Module({})
export class FirebaseModule {
  constructor() {
    if (!admin.apps.length) {
      const serviceAccount = require(path.join(__dirname, '../../config/firebase-credentials.json'));
      
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }
  }
} 
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import * as admin from 'firebase-admin';

interface UpdateProfileDto {
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private db: admin.firestore.Firestore;
  private auth: admin.auth.Auth;

  constructor() {
    this.db = admin.firestore();
    this.auth = admin.auth();
  }

  async getProfile(userId: string) {
    try {
      const userDoc = await this.db.collection('users').doc(userId).get();
      
      if (!userDoc.exists) {
        throw new NotFoundException('User not found');
      }

      const userData = userDoc.data();
      
      return {
        name: userData.name,
        email: userData.email,
        settings: {
          notifications: {
            email: userData.settings?.notifications?.email ?? true,
            push: userData.settings?.notifications?.push ?? true,
          },
          workHours: {
            daily: userData.settings?.workHours?.daily ?? 8,
            weekly: userData.settings?.workHours?.weekly ?? 40,
          },
        },
        createdAt: userData.createdAt,
      };
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }

  async updateProfile(userId: string, updateProfileDto: UpdateProfileDto) {
    try {
      // Primeiro, verifica se o usuário existe no Authentication
      const userAuth = await this.auth.getUser(userId);
      
      // Se o email está sendo alterado, atualiza no Authentication
      if (userAuth.email !== updateProfileDto.email) {
        try {
          await this.auth.updateUser(userId, {
            email: updateProfileDto.email,
          });
        } catch (error) {
          console.error('Error updating email in Authentication:', error);
          if (error.code === 'auth/email-already-exists') {
            throw new BadRequestException('Este email já está em uso');
          }
          throw new BadRequestException('Erro ao atualizar email');
        }
      }

      // Atualiza os dados no Firestore
      const userRef = this.db.collection('users').doc(userId);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        throw new NotFoundException('User not found');
      }

      await userRef.update({
        name: updateProfileDto.name,
        email: updateProfileDto.email,
      });

      // Retorna o perfil atualizado
      return this.getProfile(userId);
    } catch (error) {
      console.error('Error updating user profile:', error);
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Erro ao atualizar perfil');
    }
  }
}

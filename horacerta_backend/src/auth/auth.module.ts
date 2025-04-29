import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { FirebaseStrategy } from './firebase.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'sua_chave_secreta', // Em produção, use variáveis de ambiente
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [FirebaseStrategy],
  exports: [JwtModule, PassportModule],
})
export class AuthModule {} 
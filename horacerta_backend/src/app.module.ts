import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RegistrarPontoModule } from './registrarPonto/registrarPonto.module';
import { FirebaseModule } from './firebase/firebase.module';

@Module({
  imports: [
    FirebaseModule,
    UsersModule,
    AuthModule,
    RegistrarPontoModule,
  ],
})
export class AppModule {}

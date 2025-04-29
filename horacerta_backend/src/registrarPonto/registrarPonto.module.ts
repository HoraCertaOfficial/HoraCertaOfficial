import { Module } from '@nestjs/common';
import { RegistrarPontoController } from './registrarPonto.controller';
import { RegistrarPontoService } from './registrarPonto.service';

@Module({
  controllers: [RegistrarPontoController],
  providers: [RegistrarPontoService],
  exports: [RegistrarPontoService],
})
export class RegistrarPontoModule {}

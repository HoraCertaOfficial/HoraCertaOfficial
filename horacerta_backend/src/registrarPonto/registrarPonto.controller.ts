import { Controller, Post } from '@nestjs/common';
import { RegistrarPontoService } from './registrarPonto.service';

@Controller('registrar-ponto')
export class RegistrarPontoController {
  constructor(private readonly registrarPontoService: RegistrarPontoService) {}

  @Post()
  async registrarPonto() {
    return this.registrarPontoService.registrarPonto();
  }
}

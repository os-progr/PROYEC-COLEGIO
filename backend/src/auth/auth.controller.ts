import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    return this.authService.login(body.email, body.password);
  }

  @Post('seed')
  async seed(@Body() body: any) {
    // Endpoint temporal para crear el primer usuario fácilmente
    return this.authService.seedUser(body.email, body.password, body.role || 'TEACHER');
  }
}

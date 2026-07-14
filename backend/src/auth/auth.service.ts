import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../database/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }
    const isPasswordValid = await bcrypt.compare(pass, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name
      }
    };
  }

  async seedUser(email: string, pass: string, role: any) {
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) {
      return { message: 'El usuario ya existe', user: existing };
    }
    const password = await bcrypt.hash(pass, 10);
    const newUser = await this.prisma.user.create({
      data: {
        email,
        password,
        role,
        name: 'Usuario Prueba',
      }
    });
    return { message: 'Usuario creado exitosamente', user: newUser };
  }
}

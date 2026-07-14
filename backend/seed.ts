import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('admin123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'admin@colegio.com' },
    update: {},
    create: {
      email: 'admin@colegio.com',
      password: password,
      name: 'Director Admin',
      role: 'ADMIN',
    },
  });
  console.log('Usuario creado exitosamente:', user.email);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

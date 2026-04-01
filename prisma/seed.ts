import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@mesmer.local' },
    update: {},
    create: {
      email: 'admin@mesmer.local',
      passwordHash: '$2b$10$placeholder.hash.replace.in.production',
      firstName: 'System',
      lastName: 'Admin',
      role: Role.SUPER_ADMIN,
      region: 'HQ',
      isActive: true
    }
  });

  await prisma.enterprise.upsert({
    where: { id: '00000000-0000-4000-8000-000000000001' },
    update: {},
    create: {
      id: '00000000-0000-4000-8000-000000000001',
      businessName: 'Demo Enterprise',
      contactPerson: 'Demo Contact',
      region: 'North',
      userId: admin.id
    }
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.program.createMany({
    data: [
      { name: 'Infrastructure Modernization', owner: 'Operations', status: 'ACTIVE' },
      { name: 'Customer Success Revamp', owner: 'Product', status: 'PLANNED' }
    ]
  });
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

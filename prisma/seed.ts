import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
    await prisma.cliente.deleteMany({});
    for (let i = 0; i < 50; i++) {
        await prisma.cliente.create({
            data: {
                nome: `${faker.name.firstName()} ${faker.name.lastName()}`,
                dt_nascimento: faker.date.birthdate({ min: 18, max: 75, mode: 'age' }),
            }
        })
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
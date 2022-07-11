import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  //await prisma.cliente.deleteMany({});
  for (let i = 0; i < 20; i++) {
    await prisma.produtos.create({
        data: {
            nome:faker.commerce.productName(),
            preco: parseFloat(faker.commerce.price(0,200)),
            descricao: faker.commerce.productDescription()
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

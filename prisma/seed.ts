import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
    //await prisma.cliente.deleteMany({});
    //for (let i = 0; i < 20; i++) {
    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "6c901195-d6fe-4a57-9d05-0143ba83e300",
            data_compra: faker.date.between('2022-01-01T00:00:00.000Z', '2022-01-28T00:00:00.000Z'),
            mes: "Janeiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "44068885-50e3-4b98-b21b-6d5a4b2e50d2",
            data_compra: faker.date.between('2022-02-01T00:00:00.000Z', '2022-02-28T00:00:00.000Z'),
            mes: "Fevereiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "ab86cbde-bd5b-474c-a4f3-106b5839cd39",
            data_compra: faker.date.between('2022-03-01T00:00:00.000Z', '2022-03-28T00:00:00.000Z'),
            mes: "Março"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "ab86cbde-bd5b-474c-a4f3-106b5839cd39",
            data_compra: faker.date.between('2022-04-01T00:00:00.000Z', '2022-04-28T00:00:00.000Z'),
            mes: "Abril"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "b9b2b7b1-fe84-43f4-ab5a-69d027d86106",
            data_compra: faker.date.between('2022-05-01T00:00:00.000Z', '2022-05-28T00:00:00.000Z'),
            mes: "Maio"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "07be4420-b00e-46a5-a2f2-f320c277446d",
            data_compra: faker.date.between('2022-06-01T00:00:00.000Z', '2022-06-28T00:00:00.000Z'),
            mes: "Junho"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "f1a9fe10-ec22-4393-b903-a1638e8853d3",
            data_compra: faker.date.between('2022-07-01T00:00:00.000Z', '2022-07-11T00:00:00.000Z'),
            mes: "Julho"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "50ce24bb-2051-4e04-be5b-458d84c26ca8",
            data_compra: faker.date.between('2022-01-01T00:00:00.000Z', '2022-01-28T00:00:00.000Z'),
            mes: "Janeiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "6d6d0ebe-b26c-4228-88a6-ad77730646db",
            data_compra: faker.date.between('2022-01-01T00:00:00.000Z', '2022-01-28T00:00:00.000Z'),
            mes: "Janeiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "e0ab6404-e00a-4353-b801-a22cfdd779e9",
            data_compra: faker.date.between('2022-01-01T00:00:00.000Z', '2022-01-28T00:00:00.000Z'),
            mes: "Janeiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "e61314aa-99e5-456a-bdd9-252be1454f0a",
            data_compra: faker.date.between('2022-01-01T00:00:00.000Z', '2022-01-28T00:00:00.000Z'),
            mes: "Janeiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "eb5719ef-2b98-40db-9148-57276378960c",
            produtosId: "f782685e-6562-46d1-9a0e-1cdc227c9cf3",
            data_compra: faker.date.between('2022-01-01T00:00:00.000Z', '2022-01-28T00:00:00.000Z'),
            mes: "Janeiro"
        }
    })

}
//}



main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

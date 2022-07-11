import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
    //await prisma.cliente.deleteMany({});
    //for (let i = 0; i < 20; i++) {
    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "766642d4-d28a-493f-804d-c67ffaf5664a",
            data_compra: faker.date.between('2022-01-01T00:00:00.000Z', '2022-01-28T00:00:00.000Z'),
            mes: "Janeiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "b9b2b7b1-fe84-43f4-ab5a-69d027d86106",
            data_compra: faker.date.between('2022-02-01T00:00:00.000Z', '2022-02-28T00:00:00.000Z'),
            mes: "Fevereiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "6d6d0ebe-b26c-4228-88a6-ad77730646db",
            data_compra: faker.date.between('2022-03-01T00:00:00.000Z', '2022-03-28T00:00:00.000Z'),
            mes: "Março"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "f782685e-6562-46d1-9a0e-1cdc227c9cf3",
            data_compra: faker.date.between('2022-04-01T00:00:00.000Z', '2022-04-28T00:00:00.000Z'),
            mes: "Abril"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "50ce24bb-2051-4e04-be5b-458d84c26ca8",
            data_compra: faker.date.between('2022-05-01T00:00:00.000Z', '2022-05-28T00:00:00.000Z'),
            mes: "Maio"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "636d4d33-fc6a-4dfc-b637-edf51c7058a5",
            data_compra: faker.date.between('2022-06-01T00:00:00.000Z', '2022-06-28T00:00:00.000Z'),
            mes: "Junho"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "244ddd3b-6494-455a-8708-d736e7e77301",
            data_compra: faker.date.between('2022-07-01T00:00:00.000Z', '2022-07-11T00:00:00.000Z'),
            mes: "Julho"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "6c901195-d6fe-4a57-9d05-0143ba83e300",
            data_compra: faker.date.between('2022-04-01T00:00:00.000Z', '2022-04-28T00:00:00.000Z'),
            mes: "Abril"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "f1a9fe10-ec22-4393-b903-a1638e8853d3",
            data_compra: faker.date.between('2022-04-01T00:00:00.000Z', '2022-04-28T00:00:00.000Z'),
            mes: "Abril"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "2b9108aa-49d9-4be3-862d-298868e7dfd9",
            data_compra: faker.date.between('2022-04-01T00:00:00.000Z', '2022-04-28T00:00:00.000Z'),
            mes: "Abril"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "c117f042-6507-4a05-bf98-2ae054f13bfe",
            data_compra: faker.date.between('2022-04-01T00:00:00.000Z', '2022-04-28T00:00:00.000Z'),
            mes: "Abril"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "192c56fe-d457-4884-99ba-cc179f8dc077",
            data_compra: faker.date.between('2022-04-01T00:00:00.000Z', '2022-04-28T00:00:00.000Z'),
            mes: "Abril"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "13a714c2-e920-4b3d-b453-85dbd3c952f5",
            data_compra: faker.date.between('2022-04-01T00:00:00.000Z', '2022-04-28T00:00:00.000Z'),
            mes: "abril"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "d2179685-9e8e-44c8-bd23-e0bca9f80ee2",
            produtosId: "ab86cbde-bd5b-474c-a4f3-106b5839cd39",
            data_compra: faker.date.between('2022-04-01T00:00:00.000Z', '2022-04-28T00:00:00.000Z'),
            mes: "abril"
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

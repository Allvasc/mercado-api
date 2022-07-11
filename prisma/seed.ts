import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
    //await prisma.cliente.deleteMany({});
    //for (let i = 0; i < 20; i++) {
    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "6c901195-d6fe-4a57-9d05-0143ba83e300",
            data_compra: faker.date.between('2022-01-01T00:00:00.000Z', '2022-01-28T00:00:00.000Z'),
            mes: "Janeiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "44068885-50e3-4b98-b21b-6d5a4b2e50d2",
            data_compra: faker.date.between('2022-02-01T00:00:00.000Z', '2022-02-28T00:00:00.000Z'),
            mes: "Fevereiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "07be4420-b00e-46a5-a2f2-f320c277446d",
            data_compra: faker.date.between('2022-03-01T00:00:00.000Z', '2022-03-28T00:00:00.000Z'),
            mes: "Março"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "f1a9fe10-ec22-4393-b903-a1638e8853d3",
            data_compra: faker.date.between('2022-04-01T00:00:00.000Z', '2022-04-28T00:00:00.000Z'),
            mes: "Abril"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "50ce24bb-2051-4e04-be5b-458d84c26ca8",
            data_compra: faker.date.between('2022-05-01T00:00:00.000Z', '2022-05-28T00:00:00.000Z'),
            mes: "Maio"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "244ddd3b-6494-455a-8708-d736e7e77301",
            data_compra: faker.date.between('2022-06-01T00:00:00.000Z', '2022-06-28T00:00:00.000Z'),
            mes: "Junho"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "44068885-50e3-4b98-b21b-6d5a4b2e50d2",
            data_compra: faker.date.between('2022-07-01T00:00:00.000Z', '2022-07-11T00:00:00.000Z'),
            mes: "Julho"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "c117f042-6507-4a05-bf98-2ae054f13bfe",
            data_compra: faker.date.between('2022-02-01T00:00:00.000Z', '2022-02-28T00:00:00.000Z'),
            mes: "Fevereiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "a0c7613d-020d-493a-9625-9afaa3ad8eca",
            data_compra: faker.date.between('2022-02-01T00:00:00.000Z', '2022-02-28T00:00:00.000Z'),
            mes: "Fevereiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "244ddd3b-6494-455a-8708-d736e7e77301",
            data_compra: faker.date.between('2022-02-01T00:00:00.000Z', '2022-02-28T00:00:00.000Z'),
            mes: "Fevereiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "192c56fe-d457-4884-99ba-cc179f8dc077",
            data_compra: faker.date.between('2022-02-01T00:00:00.000Z', '2022-02-28T00:00:00.000Z'),
            mes: "Fevereiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "2b9108aa-49d9-4be3-862d-298868e7dfd9",
            data_compra: faker.date.between('2022-02-01T00:00:00.000Z', '2022-02-28T00:00:00.000Z'),
            mes: "Fevereiro"
        }
    })

    await prisma.compras.create({
        data: {
            clienteId: "9dce2d73-7e34-4f74-937a-76a0aa3c604a",
            produtosId: "44068885-50e3-4b98-b21b-6d5a4b2e50d2",
            data_compra: faker.date.between('2022-02-01T00:00:00.000Z', '2022-02-28T00:00:00.000Z'),
            mes: "Fevereiro"
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

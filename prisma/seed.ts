import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
    //await prisma.produtos.deleteMany({});
    //for (let i = 0; i < 20; i++) {
        await prisma.compras.create({
            data: {
                cliente: "Michale Paucek",
                clienteId:"bb409a8a-718e-4d8e-b284-4f1a0a368170",
                produtos:"Bespoke Frozen Chips",
                produtosId:"dd5f8cfb-831f-4aef-a2dc-4307f6504d9d",
                data_compra:"2022-01-01 23:45:12.023",
            }
        })

        await prisma.compras.create({
            data: {
                cliente: "Michale Paucek",
                clienteId:"bb409a8a-718e-4d8e-b284-4f1a0a368170",
                produtos:"Bespoke Frozen Chips",
                produtosId:"dd5f8cfb-831f-4aef-a2dc-4307f6504d9d",
                data_compra:"2022-02-01 23:45:12.023",
            }
        })

        await prisma.compras.create({
            data: {
                cliente: "Michale Paucek",
                clienteId:"bb409a8a-718e-4d8e-b284-4f1a0a368170",
                produtos:"Bespoke Metal Bacon",
                produtosId:"d38bb89a-3256-4275-b871-4121050b750e",
                data_compra:"2022-03-01 23:45:12.023",
            }
        })

        await prisma.compras.create({
            data: {
                cliente: "Michale Paucek",
                clienteId:"bb409a8a-718e-4d8e-b284-4f1a0a368170",
                produtos:"Luxurious Soft Pants",
                produtosId:"25354cd6-0d3a-473d-88ff-156d8cfaf000",
                data_compra:"2022-04-01 23:45:12.023",
            }
        })

        await prisma.compras.create({
            data: {
                cliente: "Michale Paucek",
                clienteId:"bb409a8a-718e-4d8e-b284-4f1a0a368170",
                produtos:"Incredible Cotton Shoes",
                produtosId:"260d5cf2-136e-42bd-b847-c060afbeba89",
                data_compra:"2022-05-01 23:45:12.023",
            }
        })

        await prisma.compras.create({
            data: {
                cliente: "Michale Paucek",
                clienteId:"bb409a8a-718e-4d8e-b284-4f1a0a368170",
                produtos:"Elegant Wooden Fish",
                produtosId:"30396dc9-ef4e-444a-ba85-7febea448c90",
                data_compra:"2022-06-01 23:45:12.023",
            }
        })

        await prisma.compras.create({
            data: {
                cliente: "Michale Paucek",
                clienteId:"bb409a8a-718e-4d8e-b284-4f1a0a368170",
                produtos:"Intelligent Granite Chips",
                produtosId:"47301a72-f80b-4ce6-b8b7-0b5c0e2d5639",
                data_compra:"2022-07-01 23:45:12.023",
            }
        })

        await prisma.compras.create({
            data: {
                cliente: "Michale Paucek",
                clienteId:"bb409a8a-718e-4d8e-b284-4f1a0a368170",
                produtos:"Modern Bronze Fish",
                produtosId:"4cb8c5d7-d1bb-4de2-8774-09a8cdc4a5e7",
                data_compra:"2022-01-01 23:45:12.023",
            }
        })

        await prisma.compras.create({
            data: {
                cliente: "Michale Paucek",
                clienteId:"bb409a8a-718e-4d8e-b284-4f1a0a368170",
                produtos:"Modern Bronze Pizza",
                produtosId:"6761bdd6-dde9-4377-b01b-f0a0c3dbcaf0",
                data_compra:"2022-01-01 23:45:12.023",
            }
        })

        await prisma.compras.create({
            data: {
                cliente: "Michale Paucek",
                clienteId:"bb409a8a-718e-4d8e-b284-4f1a0a368170",
                produtos:"Oriental Granite Fish",
                produtosId:"709df709-744b-48b4-8e52-8b4ad576a528",
                data_compra:"2022-01-01 23:45:12.023",
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
import prismaClient from "../../prisma/prismaClient";
import { ICompras } from "../dtos/ICompras";
import { Compras } from "../entities/Compras";
import { ICompraRepository } from "./ICompraRepository"

class CompraRepository implements ICompraRepository {
    async create({ data_compra, clienteId, produtosId, mes }: ICompras): Promise<void> {
        await prismaClient.compras.create({
            data: {
                data_compra, clienteId, produtosId, mes
            }
        })
    }

    async findByForMounth(month: string): Promise<Compras[]> {
        const data = await prismaClient.cliente.findMany({
            orderBy: {
            compras: {
                _count: "desc"
            }
        },
        where: {
            compras: {
                some: {},
            }
        },
        select: {
            id: true,
            nome: true,
            _count: true,
            compras: {
                where: {
                    mes: month
            },
            }
        }
                })

                console.log('findByForMounth', data)

                return data as any;
            }
}

export { CompraRepository }
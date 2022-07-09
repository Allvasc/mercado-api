import prismaClient from "../../prisma/prismaClient";
import { Compras } from "../entities/Compras";
import { ICompraRepository } from "./ICompraRepository"

class CompraRepository implements ICompraRepository {
    async create({ data_compra, clienteId, produtosId }: Compras): Promise<void> {
        await prismaClient.compras.create({
            data: {
                data_compra, clienteId, produtosId
            }
        })
    }
}

export { CompraRepository }
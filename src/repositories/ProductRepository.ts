import prismaClient from "../../prisma/prismaClient";
import { Product } from "../entities/Product";
import { IProductRepository } from "./IProductRepository";

class ProductRepository implements IProductRepository {
    async create({ nome, preco, descricao }: Product): Promise<void> {
        await prismaClient.produtos.create({
            data: {
                nome,
                preco,
                descricao,
            }
        })
    }
}

export { ProductRepository }
import { inject, injectable } from "tsyringe";
import { IProdutos } from "../../dtos/IProdutos";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
class CreateProductUsecase {
    constructor(
        @inject('ProductRepository')
        private productRepository: IProductRepository
    ) { }

    async execute({ nome, preco, descricao }: IProdutos): Promise<void> {
        await this.productRepository.create({ nome, preco, descricao })
    }
}

export { CreateProductUsecase }
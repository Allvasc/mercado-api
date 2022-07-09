import { inject, injectable } from "tsyringe";
import { ICompras } from "../../dtos/ICompras";
import { ICompraRepository } from "../../repositories/ICompraRepository";

@injectable()
class CreateCompratUsecase {
    constructor(
        @inject('CompraRepository')
        private compraRepository: ICompraRepository
    ) { }

    async execute({ data_compra, clienteId, produtosId }: ICompras): Promise<void> {
        await this.compraRepository.create({ data_compra, clienteId, produtosId  })
    }
}

export { CreateCompratUsecase }
import { inject, injectable } from "tsyringe";
import { ICompras } from "../../dtos/ICompras";
import { ICompraRepository } from "../../repositories/ICompraRepository";

@injectable()
class ListCompraUseCase {
    constructor(
        @inject('CompraRepository')
        private compraRepository: ICompraRepository
    ) { }

    async execute(month: string): Promise<ICompras[]> {
        const result = await this.compraRepository.findByForMounth(month);
        return result as ICompras[];
    }
}

export { ListCompraUseCase }
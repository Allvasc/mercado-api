import { IProdutos } from "../dtos/IProdutos";

interface IProductRepository {
    create(data: IProdutos): Promise<void>;
}

export {IProductRepository}
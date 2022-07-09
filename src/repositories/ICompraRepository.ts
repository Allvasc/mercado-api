import {ICompras} from "../dtos/ICompras"

interface ICompraRepository {
    create(data: ICompras): Promise<void>;
}

export {ICompraRepository}
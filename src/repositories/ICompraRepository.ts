import {ICompras} from "../dtos/ICompras"

interface ICompraRepository {
    create(data: ICompras): Promise<void>;
    findByForMounth(month: string): Promise<ICompras[]>;
}

export {ICompraRepository}
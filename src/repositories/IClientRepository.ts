import { ICliente } from "../dtos/ICliente";

interface IClientRepository {
    create(data: ICliente): Promise<void>;
}

export {IClientRepository}
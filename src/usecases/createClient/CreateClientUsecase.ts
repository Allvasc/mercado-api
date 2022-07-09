import { inject, injectable } from "tsyringe";
import { ICliente } from "../../dtos/ICliente";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
class CreateClientUsecase {
    constructor(
        @inject('ClienteRepository')
        private clientRepository: IClientRepository
    ) { }

    async execute({ nome, dt_nascimento }: ICliente): Promise<void> {
        await this.clientRepository.create({ nome, dt_nascimento })
    }
}

export { CreateClientUsecase }
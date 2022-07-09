import { Cliente } from "../entities/Client";
import { IClientRepository } from "./IClientRepository";
import prismaClient from "../../prisma/prismaClient";

class ClientRepository implements IClientRepository {
    async create({ nome, dt_nascimento }: Cliente): Promise<void> {
        await prismaClient.cliente.create({
            data: {
                nome,
                dt_nascimento
            }
        })
    }
}

export { ClientRepository }
import { Request, Response } from "express";
import { ICliente } from "../../dtos/ICliente";
import { CreateClientUsecase } from "./CreateClientUsecase";

class CreateClientController {
    constructor(private useCase: CreateClientUsecase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { nome, dt_nascimento }: ICliente = req.body
        await this.useCase.execute({ nome, dt_nascimento })
        return res.status(201).send({ mensagem: 'Cliente criado com sucesso' })
    }

}

export { CreateClientController }
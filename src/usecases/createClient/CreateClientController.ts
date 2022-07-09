import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICliente } from "../../dtos/ICliente";
import { CreateClientUsecase } from "./CreateClientUsecase";

class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { nome, dt_nascimento }: ICliente = req.body
        const useCase = container.resolve(CreateClientUsecase)
        await useCase.execute({ nome, dt_nascimento })
        return res.status(201).send({ mensagem: 'Cliente criado com sucesso' })
    }

}

export { CreateClientController }
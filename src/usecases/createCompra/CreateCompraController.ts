import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICompras } from "../../dtos/ICompras"
import { CreateCompratUsecase } from "./CreateCompratUsecase"

class CreateCompraController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { data_compra, clienteId, produtosId, mes }: ICompras = req.body
        const useCase = container.resolve(CreateCompratUsecase)
        await useCase.execute({ data_compra, clienteId, produtosId, mes })
        return res.status(201).send({ mensagem: 'Compra criada com sucesso' })
    }

}

export { CreateCompraController }
import { Request, Response } from "express";
import { container } from "tsyringe";
import { IProdutos } from "../../dtos/IProdutos";
import { CreateProductUsecase } from "./CreateProductUsecase";


class CreateProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { nome, preco, descricao }: IProdutos = req.body
        const useCase = container.resolve(CreateProductUsecase)
        await useCase.execute({ nome, preco, descricao })
        return res.status(201).send({ mensagem: 'Produto criado com sucesso' })
    }

}

export { CreateProductController }
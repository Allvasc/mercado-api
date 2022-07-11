import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCompraUseCase } from "./ListCompraUseCase"

class ListCompraController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { month } = req.body
        const useCase = container.resolve(ListCompraUseCase)
        const result = await useCase.execute(month)
        console.log('controller', result)
        return res.status(200).send({ result })
    }

}

export { ListCompraController }
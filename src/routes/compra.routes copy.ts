import { Router } from "express";
import { CreateCompraController } from "../usecases/createCompra/CreateCompraController";


const compraRoutes = Router()

const compraController = new CreateCompraController()

compraRoutes.post('/', compraController.handle)


export { compraRoutes }
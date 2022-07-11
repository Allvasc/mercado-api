import { Router } from "express";
import { CreateCompraController } from "../usecases/createCompra/CreateCompraController";
import { ListCompraController } from "../usecases/listCompra/ListCompraController";


const compraRoutes = Router()

const compraController = new CreateCompraController()
const listCompraController = new ListCompraController()

compraRoutes.post('/create', compraController.handle)
compraRoutes.get('/list', listCompraController.handle)


export { compraRoutes }
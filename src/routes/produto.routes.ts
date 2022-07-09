import { Router } from "express";
import { CreateProductController } from "../usecases/creatProduct/CreateProductController";


const productRoutes = Router()

const clienController = new CreateProductController()

productRoutes.post('/', clienController.handle)


export { productRoutes }
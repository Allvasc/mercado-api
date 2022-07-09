import { Router } from "express";
import { clientRoutes } from "./cliente.routes";
import { compraRoutes } from "./compra.routes copy";
import { productRoutes } from "./produto.routes";

const router = Router()

router.use('/create_client', clientRoutes)

router.use('/create_product', productRoutes)

router.use('/create_compra', compraRoutes)


export { router }


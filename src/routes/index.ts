import { Router } from "express";
import { clientRoutes } from "./cliente.routes";

const router = Router()

router.use('/create', clientRoutes)

export { router }


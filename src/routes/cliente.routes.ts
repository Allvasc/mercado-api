import { Router } from "express";
import { createClientFactory } from "../usecases/createClient/CreateClientFactory";

const clientRoutes = Router()

const clienController = createClientFactory()

clientRoutes.post('/', clienController.handle)


export { clientRoutes }
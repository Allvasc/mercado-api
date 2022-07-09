import { Router } from "express";
import { CreateClientController } from "../usecases/createClient/CreateClientController";

const clientRoutes = Router()

const clienController = new CreateClientController()

clientRoutes.post('/', clienController.handle)


export { clientRoutes }
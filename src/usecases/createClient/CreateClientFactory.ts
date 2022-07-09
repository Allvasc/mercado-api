import { ClientRepository } from "../../repositories/ClientRepository"
import { CreateClientController } from "./CreateClientController"
import { CreateClientUsecase } from "./CreateClientUsecase"

const createClientFactory = () => {
    const clientRepository = new ClientRepository()
    const useCase = new CreateClientUsecase(clientRepository)
    const clientController = new CreateClientController(useCase)
    return clientController
}

export { createClientFactory }
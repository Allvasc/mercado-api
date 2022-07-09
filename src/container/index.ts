import { container } from 'tsyringe';
import { ClientRepository } from '../repositories/ClientRepository';
import { IClientRepository } from '../repositories/IClientRepository';


container.registerSingleton<IClientRepository>('ClienteRepository', ClientRepository)
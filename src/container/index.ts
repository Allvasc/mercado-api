import { container } from 'tsyringe';
import { ClientRepository } from '../repositories/ClientRepository';
import { CompraRepository } from '../repositories/CompraRepository';
import { IClientRepository } from '../repositories/IClientRepository';
import { IProductRepository } from '../repositories/IProductRepository';
import { ProductRepository } from '../repositories/ProductRepository';
import { ICompraRepository } from '../repositories/ICompraRepository';



container.registerSingleton<IClientRepository>('ClienteRepository', ClientRepository)
container.registerSingleton<IProductRepository>('ProductRepository', ProductRepository)
container.registerSingleton<ICompraRepository>('CompraRepository', CompraRepository)
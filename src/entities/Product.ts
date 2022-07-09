import { randomUUID } from "crypto";

class Product {
    id?: string;
    nome!: string;
    preco!: number;
    descricao!: string;
    created_at!: Date;
    
    constructor(){
        if(!this.id){
            this.id = randomUUID()
        }
    }
}

export {Product}
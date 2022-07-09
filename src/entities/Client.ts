import { randomUUID } from "crypto";

class Cliente {
    id?: string;
    nome!: string;
    dt_nascimento!: Date;
    created_at!: Date;
    
    constructor(){
        if(!this.id){
            this.id = randomUUID()
        }
    }
}

export {Cliente}
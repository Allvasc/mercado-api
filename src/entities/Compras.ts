import { randomUUID } from "crypto";

class Compras {
    id?: string;
    data_compra!: Date;
    created_at!: Date;
    clienteId!: string;
    produtosId!: string;

    constructor() {
        if (!this.id) {
            this.id = randomUUID()
        }
    }
}

export { Compras }
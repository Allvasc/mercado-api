-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "dt_nascimento" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "descricao" VARCHAR(500) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "compras" (
    "id" TEXT NOT NULL,
    "data_compra" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clienteId" TEXT NOT NULL,
    "produtosId" TEXT NOT NULL,

    CONSTRAINT "compras_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "compras" ADD CONSTRAINT "compras_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compras" ADD CONSTRAINT "compras_produtosId_fkey" FOREIGN KEY ("produtosId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

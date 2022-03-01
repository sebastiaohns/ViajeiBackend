-- CreateTable
CREATE TABLE "viagens" (
    "id" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "data_ida" TIMESTAMP(3) NOT NULL,
    "data_volta" TIMESTAMP(3) NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "viagens_pkey" PRIMARY KEY ("id")
);

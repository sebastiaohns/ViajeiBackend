-- CreateTable
CREATE TABLE "atividades" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "local" TEXT NOT NULL,
    "id_pessoa" TEXT NOT NULL,
    "id_viagem" TEXT NOT NULL,

    CONSTRAINT "atividades_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_id_pessoa_fkey" FOREIGN KEY ("id_pessoa") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atividades" ADD CONSTRAINT "atividades_id_viagem_fkey" FOREIGN KEY ("id_viagem") REFERENCES "viagens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

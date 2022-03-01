-- CreateTable
CREATE TABLE "pessoas_viagens" (
    "id" TEXT NOT NULL,
    "id_pessoa" TEXT NOT NULL,
    "id_viagem" TEXT NOT NULL,

    CONSTRAINT "pessoas_viagens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pessoas_viagens" ADD CONSTRAINT "pessoas_viagens_id_pessoa_fkey" FOREIGN KEY ("id_pessoa") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pessoas_viagens" ADD CONSTRAINT "pessoas_viagens_id_viagem_fkey" FOREIGN KEY ("id_viagem") REFERENCES "viagens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

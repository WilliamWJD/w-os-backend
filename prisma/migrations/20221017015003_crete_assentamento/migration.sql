-- CreateTable
CREATE TABLE "Assentamento" (
    "id" TEXT NOT NULL,
    "chamado_id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Assentamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Assentamento" ADD CONSTRAINT "Assentamento_chamado_id_fkey" FOREIGN KEY ("chamado_id") REFERENCES "Chamado"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

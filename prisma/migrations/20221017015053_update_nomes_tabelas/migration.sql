/*
  Warnings:

  - You are about to drop the `Assentamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chamado` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Assentamento" DROP CONSTRAINT "Assentamento_chamado_id_fkey";

-- DropForeignKey
ALTER TABLE "Chamado" DROP CONSTRAINT "Chamado_tecnico_id_fkey";

-- DropForeignKey
ALTER TABLE "Chamado" DROP CONSTRAINT "Chamado_usuario_id_fkey";

-- DropTable
DROP TABLE "Assentamento";

-- DropTable
DROP TABLE "Chamado";

-- CreateTable
CREATE TABLE "chamados" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "prioridade" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "solucao" TEXT NOT NULL,
    "tecnico_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_encerramento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chamados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assentamentos" (
    "id" TEXT NOT NULL,
    "chamado_id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "assentamentos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_tecnico_id_fkey" FOREIGN KEY ("tecnico_id") REFERENCES "tecnicos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assentamentos" ADD CONSTRAINT "assentamentos_chamado_id_fkey" FOREIGN KEY ("chamado_id") REFERENCES "chamados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

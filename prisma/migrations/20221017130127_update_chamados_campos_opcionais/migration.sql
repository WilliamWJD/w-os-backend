-- DropForeignKey
ALTER TABLE "chamados" DROP CONSTRAINT "chamados_tecnico_id_fkey";

-- AlterTable
ALTER TABLE "chamados" ALTER COLUMN "solucao" DROP NOT NULL,
ALTER COLUMN "tecnico_id" DROP NOT NULL,
ALTER COLUMN "data_encerramento" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "chamados" ADD CONSTRAINT "chamados_tecnico_id_fkey" FOREIGN KEY ("tecnico_id") REFERENCES "tecnicos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

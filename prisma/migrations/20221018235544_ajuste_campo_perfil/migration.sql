/*
  Warnings:

  - The `perfil` column on the `usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'TECNICO');

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "perfil",
ADD COLUMN     "perfil" "Role" NOT NULL DEFAULT 'USER';

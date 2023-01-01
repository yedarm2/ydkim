/*
  Warnings:

  - You are about to alter the column `element` on the `gicharacter` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `gicharacter` MODIFY `element` ENUM('Pyro', 'Hydro', 'Cryo', 'Electro', 'Dendro', 'Geo', 'Anemo') NOT NULL;

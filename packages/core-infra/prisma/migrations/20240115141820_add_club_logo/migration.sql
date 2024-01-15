/*
  Warnings:

  - A unique constraint covering the columns `[logoAssetId]` on the table `Club` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageAssetId]` on the table `School` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `logoAssetId` to the `Club` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `club` ADD COLUMN `logoAssetId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Club_logoAssetId_key` ON `Club`(`logoAssetId`);

-- CreateIndex
CREATE UNIQUE INDEX `School_imageAssetId_key` ON `School`(`imageAssetId`);

-- AddForeignKey
ALTER TABLE `Club` ADD CONSTRAINT `Club_logoAssetId_fkey` FOREIGN KEY (`logoAssetId`) REFERENCES `Asset`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

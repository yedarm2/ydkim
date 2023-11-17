/*
  Warnings:

  - You are about to drop the column `logoImageId` on the `school` table. All the data in the column will be lost.
  - Added the required column `imageAssetId` to the `School` table without a default value. This is not possible if the table is not empty.
  - Added the required column `urbanAffinity` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `school` DROP COLUMN `logoImageId`,
    ADD COLUMN `imageAssetId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `student` ADD COLUMN `urbanAffinity` ENUM('D', 'C', 'B', 'A', 'S', 'SS') NOT NULL;

-- AddForeignKey
ALTER TABLE `School` ADD CONSTRAINT `School_imageAssetId_fkey` FOREIGN KEY (`imageAssetId`) REFERENCES `Asset`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

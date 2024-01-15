-- DropForeignKey
ALTER TABLE `club` DROP FOREIGN KEY `Club_logoAssetId_fkey`;

-- AlterTable
ALTER TABLE `club` MODIFY `logoAssetId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Club` ADD CONSTRAINT `Club_logoAssetId_fkey` FOREIGN KEY (`logoAssetId`) REFERENCES `Asset`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

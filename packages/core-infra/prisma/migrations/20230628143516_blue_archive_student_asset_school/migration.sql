/*
  Warnings:

  - Added the required column `armorType` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attackType` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `combatClass` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipment1` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipment2` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `equipment3` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `indoorsAffinity` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `outdoorsAffinity` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schoolId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `star` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentImageId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weaponImageId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weaponType` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student` ADD COLUMN `armorType` ENUM('Light', 'Heavy', 'Special', 'Elastic') NOT NULL,
    ADD COLUMN `attackType` ENUM('Explosive', 'Penetration', 'Mystic') NOT NULL,
    ADD COLUMN `combatClass` ENUM('Striker', 'Special') NOT NULL,
    ADD COLUMN `equipment1` INTEGER NOT NULL,
    ADD COLUMN `equipment2` INTEGER NOT NULL,
    ADD COLUMN `equipment3` INTEGER NOT NULL,
    ADD COLUMN `indoorsAffinity` ENUM('D', 'C', 'B', 'A', 'S', 'SS') NOT NULL,
    ADD COLUMN `outdoorsAffinity` ENUM('D', 'C', 'B', 'A', 'S', 'SS') NOT NULL,
    ADD COLUMN `role` ENUM('Attacker', 'Support', 'Tank', 'Tactical_Support') NOT NULL,
    ADD COLUMN `schoolId` INTEGER NOT NULL,
    ADD COLUMN `star` TINYINT NOT NULL,
    ADD COLUMN `studentImageId` INTEGER NOT NULL,
    ADD COLUMN `weaponImageId` INTEGER NOT NULL,
    ADD COLUMN `weaponType` ENUM('HG', 'SG', 'SMG', 'AR', 'SR', 'MG', 'RG', 'GL', 'MT') NOT NULL;

-- CreateTable
CREATE TABLE `Asset` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `School` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `logoImageId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

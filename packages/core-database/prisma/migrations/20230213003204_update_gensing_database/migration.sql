/*
  Warnings:

  - You are about to drop the `GIExperienceTable` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `giartifact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gicharacter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `gimaterial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `giweapon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `GIExperienceTable`;

-- DropTable
DROP TABLE `giartifact`;

-- DropTable
DROP TABLE `gicharacter`;

-- DropTable
DROP TABLE `gimaterial`;

-- DropTable
DROP TABLE `giweapon`;

-- CreateTable
CREATE TABLE `GCharacter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `element` ENUM('pyro', 'hydro', 'cryo', 'electro', 'dendro', 'geo', 'anemo') NOT NULL,
    `star` TINYINT NOT NULL,
    `normalBossMaterialId` INTEGER NOT NULL,
    `localSpecialtyMaterialId` INTEGER NOT NULL,
    `normalMonsterMaterialCategory` VARCHAR(191) NOT NULL,
    `weeklyBossMaterialId` INTEGER NOT NULL,
    `skillLevelUpMaterialCategory` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GWeapon` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('sword', 'claymore', 'polearm', 'catalyst', 'bow') NOT NULL,
    `star` TINYINT NOT NULL,
    `weaponLevelUpMaterialCategory` INTEGER NOT NULL,
    `normalMonsterMaterial1Category` VARCHAR(191) NOT NULL,
    `normalMonsterMaterial2Category` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GArtifact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `star` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GMaterial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `star` TINYINT NOT NULL,
    `type` ENUM('normalBoss', 'localSpecialty', 'normalMonster', 'weeklyBoss', 'skillLevelUp', 'weaponLevelUp') NOT NULL,
    `category` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GExperienceTable` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

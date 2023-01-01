/*
  Warnings:

  - The values [Pyro,Hydro,Cryo,Electro,Dendro,Geo,Anemo] on the enum `GICharacter_element` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `name` to the `GIArtifact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `star` to the `GIArtifact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterAscensionMaterialId` to the `GICharacter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commonAscensionMaterialId` to the `GICharacter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highTalentLevelUpMaterialId` to the `GICharacter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localSpecialtyId` to the `GICharacter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `talentLevelUpMaterialId` to the `GICharacter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name1` to the `GIMaterial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name2` to the `GIMaterial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name3` to the `GIMaterial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `characterAscensionMaterialId` to the `GIWeapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commonAscensionMaterial1Id` to the `GIWeapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commonAscensionMaterial2Id` to the `GIWeapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `GIWeapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `star` to the `GIWeapon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `GIWeapon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `giartifact` ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `star` TINYINT NOT NULL;

-- AlterTable
ALTER TABLE `gicharacter` ADD COLUMN `characterAscensionMaterialId` INTEGER NOT NULL,
    ADD COLUMN `commonAscensionMaterialId` INTEGER NOT NULL,
    ADD COLUMN `highTalentLevelUpMaterialId` INTEGER NOT NULL,
    ADD COLUMN `localSpecialtyId` INTEGER NOT NULL,
    ADD COLUMN `talentLevelUpMaterialId` INTEGER NOT NULL,
    MODIFY `element` ENUM('pyro', 'hydro', 'cryo', 'electro', 'dendro', 'geo', 'anemo') NOT NULL;

-- AlterTable
ALTER TABLE `gimaterial` ADD COLUMN `name1` VARCHAR(191) NOT NULL,
    ADD COLUMN `name2` VARCHAR(191) NOT NULL,
    ADD COLUMN `name3` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `giweapon` ADD COLUMN `characterAscensionMaterialId` INTEGER NOT NULL,
    ADD COLUMN `commonAscensionMaterial1Id` INTEGER NOT NULL,
    ADD COLUMN `commonAscensionMaterial2Id` INTEGER NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `star` TINYINT NOT NULL,
    ADD COLUMN `type` ENUM('sword', 'claymore', 'polearm', 'catalyst', 'bow') NOT NULL;

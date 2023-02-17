/*
  Warnings:

  - You are about to drop the column `userId` on the `tbl_address` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `tbl_user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tbl_address` DROP FOREIGN KEY `tbl_address_userId_fkey`;

-- AlterTable
ALTER TABLE `tbl_address` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `tbl_user` DROP COLUMN `description`;

-- CreateTable
CREATE TABLE `UserAddress` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `id_address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserAddress` ADD CONSTRAINT `UserAddress_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserAddress` ADD CONSTRAINT `UserAddress_id_address_fkey` FOREIGN KEY (`id_address`) REFERENCES `tbl_address`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `id_user` on the `tbl_address` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tbl_address` DROP FOREIGN KEY `tbl_address_id_user_fkey`;

-- AlterTable
ALTER TABLE `tbl_address` DROP COLUMN `id_user`;

-- CreateTable
CREATE TABLE `tbl_address_users` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,
    `id_address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_address_users` ADD CONSTRAINT `tbl_address_users_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_address_users` ADD CONSTRAINT `tbl_address_users_id_address_fkey` FOREIGN KEY (`id_address`) REFERENCES `tbl_address`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

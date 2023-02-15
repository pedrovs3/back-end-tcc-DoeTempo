/*
  Warnings:

  - You are about to drop the `tbl_address_users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_address` to the `tbl_user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tbl_address_users` DROP FOREIGN KEY `tbl_address_users_id_address_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_address_users` DROP FOREIGN KEY `tbl_address_users_id_user_fkey`;

-- AlterTable
ALTER TABLE `tbl_user` ADD COLUMN `id_address` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `tbl_address_users`;

-- AddForeignKey
ALTER TABLE `tbl_user` ADD CONSTRAINT `tbl_user_id_address_fkey` FOREIGN KEY (`id_address`) REFERENCES `tbl_address`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `userId` to the `tbl_address` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tbl_user` DROP FOREIGN KEY `tbl_user_id_address_fkey`;

-- AlterTable
ALTER TABLE `tbl_address` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `tbl_address` ADD CONSTRAINT `tbl_address_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

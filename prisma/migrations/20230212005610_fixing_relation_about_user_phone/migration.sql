/*
  Warnings:

  - You are about to drop the column `id_phone` on the `tbl_user` table. All the data in the column will be lost.
  - Added the required column `id_user` to the `tbl_phone` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tbl_user` DROP FOREIGN KEY `tbl_user_id_phone_fkey`;

-- AlterTable
ALTER TABLE `tbl_phone` ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_user` DROP COLUMN `id_phone`;

-- AddForeignKey
ALTER TABLE `tbl_phone` ADD CONSTRAINT `tbl_phone_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

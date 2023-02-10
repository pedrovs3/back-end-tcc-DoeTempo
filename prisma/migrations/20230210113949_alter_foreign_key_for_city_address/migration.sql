/*
  Warnings:

  - Added the required column `id_city` to the `tbl_address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_address` ADD COLUMN `id_city` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `tbl_address` ADD CONSTRAINT `tbl_address_id_city_fkey` FOREIGN KEY (`id_city`) REFERENCES `tbl_city`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

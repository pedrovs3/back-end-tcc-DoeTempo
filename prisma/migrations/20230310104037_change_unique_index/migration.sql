/*
  Warnings:

  - A unique constraint covering the columns `[id_user]` on the table `tbl_user_address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `tbl_ngo_address` DROP FOREIGN KEY `fk_tbl_ngo_address_tbl_ngo1`;

-- CreateIndex
CREATE UNIQUE INDEX `tbl_user_address_id_user_key` ON `tbl_user_address`(`id_user`);

-- AddForeignKey
ALTER TABLE `tbl_ngo_address` ADD CONSTRAINT `fk_tbl_ngo_address_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

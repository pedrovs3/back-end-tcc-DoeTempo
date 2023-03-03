/*
  Warnings:

  - You are about to alter the column `birthdate` on the `tbl_user` table. The data in that column could be lost. The data in that column will be cast from `Time(0)` to `Date`.
  - Added the required column `password` to the `tbl_ngo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tbl_campaign_address` DROP FOREIGN KEY `fk_tbl_campaign_address_tbl_campaign1`;

-- AlterTable
ALTER TABLE `tbl_ngo` ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_user` MODIFY `birthdate` DATE NOT NULL;

-- AddForeignKey
ALTER TABLE `tbl_campaign_address` ADD CONSTRAINT `fk_Campaign_address_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

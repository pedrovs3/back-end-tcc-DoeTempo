/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `tbl_ngo` will be added. If there are existing duplicate values, this will fail.
  - Made the column `how_to_contribute` on table `tbl_campaign` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prerequisites` on table `tbl_campaign` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `tbl_ngo_address` DROP FOREIGN KEY `fk_tbl_ngo_address_tbl_ngo1`;

-- DropIndex
DROP INDEX `tbl_ngo_id_key` ON `tbl_ngo`;

-- AlterTable
ALTER TABLE `tbl_campaign` MODIFY `begin_date` DATE NOT NULL,
    MODIFY `end_date` DATE NOT NULL,
    MODIFY `how_to_contribute` TEXT NOT NULL,
    MODIFY `prerequisites` TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tbl_ngo_cnpj_key` ON `tbl_ngo`(`cnpj`);

-- CreateIndex
CREATE INDEX `tbl_ngo_id_idx` ON `tbl_ngo`(`id`);

-- AddForeignKey
ALTER TABLE `tbl_ngo_address` ADD CONSTRAINT `fk_tbl_ngo_address_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- RenameIndex
ALTER TABLE `tbl_ngo` RENAME INDEX `email_UNIQUE` TO `tbl_ngo_email_key`;

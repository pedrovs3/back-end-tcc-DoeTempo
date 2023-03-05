/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `tbl_causes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,id]` on the table `tbl_ngo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `tbl_user_phone` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `tbl_ngo_phone` DROP FOREIGN KEY `fk_tbl_ngo_phone_tbl_phone1`;

-- DropIndex
DROP INDEX `tbl_ngo_email_key` ON `tbl_ngo`;

-- AlterTable
ALTER TABLE `tbl_ngo_phone` MODIFY `id_phone` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tbl_causes_id_key` ON `tbl_causes`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `tbl_ngo_email_id_key` ON `tbl_ngo`(`email`, `id`);

-- CreateIndex
CREATE UNIQUE INDEX `tbl_user_phone_id_key` ON `tbl_user_phone`(`id`);

-- AddForeignKey
ALTER TABLE `tbl_ngo_phone` ADD CONSTRAINT `fk_tbl_ngo_phone_tbl_phone1` FOREIGN KEY (`id_phone`) REFERENCES `tbl_phone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

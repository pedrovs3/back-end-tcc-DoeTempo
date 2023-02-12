/*
  Warnings:

  - A unique constraint covering the columns `[abbreviation,name]` on the table `tbl_gender` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `tbl_phone` DROP FOREIGN KEY `tbl_phone_id_user_fkey`;

-- CreateIndex
CREATE UNIQUE INDEX `tbl_gender_abbreviation_name_key` ON `tbl_gender`(`abbreviation`, `name`);

-- AddForeignKey
ALTER TABLE `tbl_phone` ADD CONSTRAINT `tbl_phone_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

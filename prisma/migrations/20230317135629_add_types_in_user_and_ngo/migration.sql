/*
  Warnings:

  - Added the required column `id_type` to the `tbl_ngo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_type` to the `tbl_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_ngo` ADD COLUMN `id_type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_user` ADD COLUMN `id_type` VARCHAR(10) NOT NULL;

-- CreateTable
CREATE TABLE `tbl_type` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `tbl_type_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_user` ADD CONSTRAINT `tbl_user_id_type_fkey` FOREIGN KEY (`id_type`) REFERENCES `tbl_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_ngo` ADD CONSTRAINT `tbl_ngo_id_type_fkey` FOREIGN KEY (`id_type`) REFERENCES `tbl_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

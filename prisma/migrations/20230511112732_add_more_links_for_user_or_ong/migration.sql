/*
  Warnings:

  - You are about to drop the column `attached_link` on the `tbl_user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `tbl_user` DROP COLUMN `attached_link`;

-- CreateTable
CREATE TABLE `tbl_attached_link` (
    `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    `attached_link` VARCHAR(191) NOT NULL,
    `id_source` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NULL,
    `id_ngo` VARCHAR(191) NULL,

    UNIQUE INDEX `tbl_attached_link_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_source` (
    `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_source_id_key`(`id`),
    UNIQUE INDEX `tbl_source_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_attached_link` ADD CONSTRAINT `tbl_attached_link_id_source_fkey` FOREIGN KEY (`id_source`) REFERENCES `tbl_source`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_attached_link` ADD CONSTRAINT `tbl_attached_link_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_attached_link` ADD CONSTRAINT `tbl_attached_link_id_ngo_fkey` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

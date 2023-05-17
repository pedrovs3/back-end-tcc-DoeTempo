/*
  Warnings:

  - You are about to drop the column `accepted` on the `tbl_campaign_participants` table. All the data in the column will be lost.
  - Added the required column `id_status` to the `tbl_campaign_participants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_campaign_participants` DROP COLUMN `accepted`,
    ADD COLUMN `id_status` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Status` (
    `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    `name` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `Status_id_key`(`id`),
    UNIQUE INDEX `Status_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_campaign_participants` ADD CONSTRAINT `tbl_campaign_participants_id_status_fkey` FOREIGN KEY (`id_status`) REFERENCES `Status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

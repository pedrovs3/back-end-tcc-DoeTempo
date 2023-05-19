/*
  Warnings:

  - You are about to drop the `Status` table. If the table is not empty, all the data it contains will be lost.

*/

-- DropTable
DROP TABLE `Status`;

-- CreateTable
CREATE TABLE `tbl_status` (
    `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    `name` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `tbl_status_id_key`(`id`),
    UNIQUE INDEX `tbl_status_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_campaign_participants` ADD CONSTRAINT `tbl_campaign_participants_id_status_fkey` FOREIGN KEY (`id_status`) REFERENCES `tbl_status`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

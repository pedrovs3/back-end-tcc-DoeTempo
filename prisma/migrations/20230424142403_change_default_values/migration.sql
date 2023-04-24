/*
  Warnings:

  - A unique constraint covering the columns `[id_user]` on the table `tbl_user_phone` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `tbl_campaign_causes` DROP FOREIGN KEY `fk_tbl_campaign_causes_tbl_campaign1`;

-- DropForeignKey
ALTER TABLE `tbl_campaign_causes` DROP FOREIGN KEY `fk_tbl_campaign_causes_tbl_causes1`;

-- AlterTable
ALTER TABLE `tbl_address` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_campaign` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_campaign_address` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_campaign_causes` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_campaign_participants` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_campaign_photos` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_causes` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_comment` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_comment_ngo` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_comment_user` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_following` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_gender` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_ngo` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    MODIFY `photoURL` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fshapes-1682345333624.svg?alt=media&token=813975f8-b9ef-443b-b868-ec8733d4f096';

-- AlterTable
ALTER TABLE `tbl_ngo_address` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_ngo_causes` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_ngo_phone` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_phone` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_post_ngo` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_post_photo` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_post_user` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_type` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_user` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    MODIFY `photoURL` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fthumbs-1682345055241.svg?alt=media&token=eb57a2d6-0240-4f32-b05d-079ff19ed160';

-- AlterTable
ALTER TABLE `tbl_user_address` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- AlterTable
ALTER TABLE `tbl_user_phone` MODIFY `id` VARCHAR(191) NOT NULL DEFAULT (uuid());

-- CreateIndex
CREATE UNIQUE INDEX `tbl_user_phone_id_user_key` ON `tbl_user_phone`(`id_user`);

-- AddForeignKey
ALTER TABLE `tbl_campaign_causes` ADD CONSTRAINT `fk_tbl_campaign_causes_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_campaign_causes` ADD CONSTRAINT `fk_tbl_campaign_causes_tbl_causes1` FOREIGN KEY (`id_cause`) REFERENCES `tbl_causes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

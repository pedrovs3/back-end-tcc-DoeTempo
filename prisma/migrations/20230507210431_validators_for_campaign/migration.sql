-- DropIndex
DROP INDEX `ngoLike` ON `tbl_post_likes`;

-- DropIndex
DROP INDEX `userLike` ON `tbl_post_likes`;

-- AlterTable
ALTER TABLE `tbl_campaign` ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `tbl_campaign_participants` ADD COLUMN `accepted` BOOLEAN NOT NULL DEFAULT true;

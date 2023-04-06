-- DropForeignKey
ALTER TABLE `tbl_post_photo` DROP FOREIGN KEY `tbl_post_photo_id_post_fkey`;

-- AddForeignKey
ALTER TABLE `tbl_post_photo` ADD CONSTRAINT `tbl_post_photo_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

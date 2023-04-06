-- DropForeignKey
ALTER TABLE `tbl_post_ngo` DROP FOREIGN KEY `tbl_post_ngo_id_ngo_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_post_ngo` DROP FOREIGN KEY `tbl_post_ngo_id_post_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_post_user` DROP FOREIGN KEY `tbl_post_user_id_post_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_post_user` DROP FOREIGN KEY `tbl_post_user_id_user_fkey`;

-- AddForeignKey
ALTER TABLE `tbl_post_ngo` ADD CONSTRAINT `tbl_post_ngo_id_ngo_fkey` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_post_ngo` ADD CONSTRAINT `tbl_post_ngo_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_post_user` ADD CONSTRAINT `tbl_post_user_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_post_user` ADD CONSTRAINT `tbl_post_user_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

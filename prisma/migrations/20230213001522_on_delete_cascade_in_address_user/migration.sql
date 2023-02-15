-- DropForeignKey
ALTER TABLE `tbl_user` DROP FOREIGN KEY `tbl_user_id_address_fkey`;

-- AddForeignKey
ALTER TABLE `tbl_user` ADD CONSTRAINT `tbl_user_id_address_fkey` FOREIGN KEY (`id_address`) REFERENCES `tbl_address`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

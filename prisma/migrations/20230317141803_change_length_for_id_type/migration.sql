-- DropForeignKey
ALTER TABLE `tbl_user` DROP FOREIGN KEY `tbl_user_id_type_fkey`;

-- AlterTable
ALTER TABLE `tbl_user` MODIFY `id_type` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `tbl_user` ADD CONSTRAINT `tbl_user_id_type_fkey` FOREIGN KEY (`id_type`) REFERENCES `tbl_type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `id_address` on the `tbl_user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `tbl_user_id_address_fkey` ON `tbl_user`;

-- AlterTable
ALTER TABLE `tbl_user` DROP COLUMN `id_address`;

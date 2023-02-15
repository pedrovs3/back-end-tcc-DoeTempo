/*
  Warnings:

  - You are about to drop the column `id_address` on the `tbl_user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_user]` on the table `tbl_address` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_user` to the `tbl_address` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tbl_user` DROP FOREIGN KEY `tbl_user_id_address_fkey`;

-- AlterTable
ALTER TABLE `tbl_address` ADD COLUMN `id_user` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_user` DROP COLUMN `id_address`;

-- CreateIndex
CREATE UNIQUE INDEX `tbl_address_id_user_key` ON `tbl_address`(`id_user`);

-- AddForeignKey
ALTER TABLE `tbl_address` ADD CONSTRAINT `tbl_address_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

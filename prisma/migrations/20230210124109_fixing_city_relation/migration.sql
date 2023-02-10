/*
  Warnings:

  - You are about to drop the column `cityId` on the `tbl_user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tbl_user` DROP FOREIGN KEY `tbl_user_cityId_fkey`;

-- AlterTable
ALTER TABLE `tbl_user` DROP COLUMN `cityId`;

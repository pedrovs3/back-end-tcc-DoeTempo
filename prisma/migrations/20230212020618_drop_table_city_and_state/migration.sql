/*
  Warnings:

  - You are about to drop the column `id_city` on the `tbl_address` table. All the data in the column will be lost.
  - You are about to drop the `tbl_city` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tbl_state` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tbl_address` DROP FOREIGN KEY `tbl_address_id_city_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_city` DROP FOREIGN KEY `tbl_city_id_state_fkey`;

-- AlterTable
ALTER TABLE `tbl_address` DROP COLUMN `id_city`;

-- DropTable
DROP TABLE `tbl_city`;

-- DropTable
DROP TABLE `tbl_state`;

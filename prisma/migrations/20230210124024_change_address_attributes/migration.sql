/*
  Warnings:

  - You are about to drop the column `neighborhood` on the `tbl_address` table. All the data in the column will be lost.
  - You are about to drop the column `street` on the `tbl_address` table. All the data in the column will be lost.
  - Made the column `number` on table `tbl_address` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `tbl_address` DROP COLUMN `neighborhood`,
    DROP COLUMN `street`,
    ADD COLUMN `complement` VARCHAR(191) NULL,
    MODIFY `number` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_user` ADD COLUMN `cityId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `tbl_user` ADD CONSTRAINT `tbl_user_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `tbl_city`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

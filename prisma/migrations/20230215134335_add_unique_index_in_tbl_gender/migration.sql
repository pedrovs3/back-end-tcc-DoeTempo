/*
  Warnings:

  - A unique constraint covering the columns `[abbreviation]` on the table `tbl_gender` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tbl_gender_abbreviation_key` ON `tbl_gender`(`abbreviation`);

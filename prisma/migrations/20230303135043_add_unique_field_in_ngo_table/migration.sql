/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `tbl_ngo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX `tbl_ngo_id_idx` ON `tbl_ngo`(`id`);

-- CreateIndex
CREATE UNIQUE INDEX `tbl_ngo_email_key` ON `tbl_ngo`(`email`);

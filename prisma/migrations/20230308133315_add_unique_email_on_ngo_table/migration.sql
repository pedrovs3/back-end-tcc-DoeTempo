/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `tbl_ngo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `tbl_ngo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `tbl_ngo_email_id_key` ON `tbl_ngo`;

-- DropIndex
DROP INDEX `tbl_ngo_id_idx` ON `tbl_ngo`;

-- CreateIndex
CREATE UNIQUE INDEX `email_UNIQUE` ON `tbl_ngo`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `tbl_ngo_id_key` ON `tbl_ngo`(`id`);

/*
  Warnings:

  - A unique constraint covering the columns `[id_campaign]` on the table `tbl_campaign_address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_ngo]` on the table `tbl_ngo_address` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tbl_campaign_address_id_campaign_key` ON `tbl_campaign_address`(`id_campaign`);

-- CreateIndex
CREATE UNIQUE INDEX `tbl_ngo_address_id_ngo_key` ON `tbl_ngo_address`(`id_ngo`);

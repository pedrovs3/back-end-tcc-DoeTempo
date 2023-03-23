/*
  Warnings:

  - A unique constraint covering the columns `[id_cause,id_campaign]` on the table `tbl_campaign_causes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tbl_campaign_causes_id_cause_id_campaign_key` ON `tbl_campaign_causes`(`id_cause`, `id_campaign`);

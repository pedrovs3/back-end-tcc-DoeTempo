/*
  Warnings:

  - A unique constraint covering the columns `[id_campaign,id_user]` on the table `tbl_campaign_participants` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tbl_campaign_participants_id_campaign_id_user_key` ON `tbl_campaign_participants`(`id_campaign`, `id_user`);

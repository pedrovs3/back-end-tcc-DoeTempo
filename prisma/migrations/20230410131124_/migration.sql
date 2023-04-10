-- DropForeignKey
ALTER TABLE `tbl_campaign_causes` DROP FOREIGN KEY `fk_tbl_campaign_causes_tbl_causes1`;

-- DropForeignKey
ALTER TABLE `tbl_campaign_participants` DROP FOREIGN KEY `fk_tbl_campaign_participants_tbl_user1`;

-- AddForeignKey
ALTER TABLE `tbl_campaign_causes` ADD CONSTRAINT `fk_tbl_campaign_causes_tbl_causes1` FOREIGN KEY (`id_cause`) REFERENCES `tbl_causes`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_participants` ADD CONSTRAINT `fk_tbl_campaign_participants_tbl_user1` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AlterTable
ALTER TABLE `tbl_campaign` ADD COLUMN `how_to_contribute` TEXT NULL,
    ADD COLUMN `prerequisites` TEXT NULL,
    MODIFY `begin_date` DATETIME(3) NOT NULL,
    MODIFY `end_date` DATETIME(3) NOT NULL;

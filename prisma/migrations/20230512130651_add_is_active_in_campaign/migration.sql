-- AlterTable
ALTER TABLE `tbl_campaign` ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `tbl_campaign_participants` ADD COLUMN `accepted` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `tbl_ngo` MODIFY `photo_url` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fshapes-1683805372257.png?alt=media&token=64e96414-13c5-4639-b32a-2e642af9e7ea',
    MODIFY `banner_photo` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fheader.png?alt=media&token=eddc9058-9eb3-4f3e-9a7c-eb24b77ac261';

-- AlterTable
ALTER TABLE `tbl_user` MODIFY `banner_photo` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fheader.png?alt=media&token=eddc9058-9eb3-4f3e-9a7c-eb24b77ac261',
    MODIFY `photo_url` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fthumbs-1683805274181.png?alt=media&token=d14089b8-82a4-4283-963b-9027062a54f3';

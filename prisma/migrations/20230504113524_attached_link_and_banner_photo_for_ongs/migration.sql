-- AlterTable
ALTER TABLE `tbl_ngo` ADD COLUMN `attached_link` VARCHAR(191) NULL,
    ADD COLUMN `banner_photo` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fimage%2030.svg?alt=media&token=5ea50da8-a824-42b6-aad8-34a24cee5cae';

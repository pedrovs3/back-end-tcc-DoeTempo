-- DropForeignKey
ALTER TABLE `tbl_campaign` DROP FOREIGN KEY `fk_tbl_campaign_tbl_ngo1`;

-- DropForeignKey
ALTER TABLE `tbl_campaign_address` DROP FOREIGN KEY `fk_Campaign_address_tbl_campaign1`;

-- DropForeignKey
ALTER TABLE `tbl_campaign_causes` DROP FOREIGN KEY `fk_tbl_campaign_causes_tbl_campaign1`;

-- DropForeignKey
ALTER TABLE `tbl_campaign_causes` DROP FOREIGN KEY `fk_tbl_campaign_causes_tbl_causes1`;

-- DropForeignKey
ALTER TABLE `tbl_campaign_participants` DROP FOREIGN KEY `fk_tbl_campaign_participants_tbl_campaign1`;

-- DropForeignKey
ALTER TABLE `tbl_campaign_participants` DROP FOREIGN KEY `fk_tbl_campaign_participants_tbl_user1`;

-- DropForeignKey
ALTER TABLE `tbl_campaign_photos` DROP FOREIGN KEY `fk_tbl_campaign_photos_tbl_campaign1`;

-- AlterTable
ALTER TABLE `tbl_ngo` ADD COLUMN `photoURL` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault-user-icon-13.jpg?alt=media&token=83439f87-8b14-44fc-a4f1-d20106d9ab70';

-- AlterTable
ALTER TABLE `tbl_user` ADD COLUMN `photoURL` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fdefault-user-icon-13.jpg?alt=media&token=83439f87-8b14-44fc-a4f1-d20106d9ab70';

-- CreateTable
CREATE TABLE `tbl_post` (
    `id` VARCHAR(191) NOT NULL,
    `content` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `tbl_post_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_post_photo` (
    `id` VARCHAR(191) NOT NULL,
    `id_post` VARCHAR(191) NOT NULL,
    `photo_url` VARCHAR(256) NOT NULL,

    UNIQUE INDEX `tbl_post_photo_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_post_ngo` (
    `id` VARCHAR(191) NOT NULL,
    `id_post` VARCHAR(191) NOT NULL,
    `id_ngo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_post_ngo_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_post_user` (
    `id` VARCHAR(191) NOT NULL,
    `id_post` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_post_user_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_comment` (
    `id` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `likes` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_post` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_comment_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_comment_user` (
    `id` VARCHAR(191) NOT NULL,
    `id_comment` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_comment_user_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_comment_ngo` (
    `id` VARCHAR(191) NOT NULL,
    `id_comment` VARCHAR(191) NOT NULL,
    `nGOId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_comment_ngo_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_campaign` ADD CONSTRAINT `fk_tbl_campaign_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_address` ADD CONSTRAINT `fk_Campaign_address_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_causes` ADD CONSTRAINT `fk_tbl_campaign_causes_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_causes` ADD CONSTRAINT `fk_tbl_campaign_causes_tbl_causes1` FOREIGN KEY (`id_cause`) REFERENCES `tbl_causes`(`id`) ON DELETE SET DEFAULT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_participants` ADD CONSTRAINT `fk_tbl_campaign_participants_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_participants` ADD CONSTRAINT `fk_tbl_campaign_participants_tbl_user1` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE SET DEFAULT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_photos` ADD CONSTRAINT `fk_tbl_campaign_photos_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_post_photo` ADD CONSTRAINT `tbl_post_photo_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_post_ngo` ADD CONSTRAINT `tbl_post_ngo_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_post_ngo` ADD CONSTRAINT `tbl_post_ngo_id_ngo_fkey` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_post_user` ADD CONSTRAINT `tbl_post_user_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_post_user` ADD CONSTRAINT `tbl_post_user_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_comment` ADD CONSTRAINT `tbl_comment_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_comment_user` ADD CONSTRAINT `fk_tbl_comment_tbl_user` FOREIGN KEY (`id_comment`) REFERENCES `tbl_comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_comment_user` ADD CONSTRAINT `tbl_comment_user_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_comment_ngo` ADD CONSTRAINT `fk_tbl_comment_tbl_ngo` FOREIGN KEY (`id_comment`) REFERENCES `tbl_comment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_comment_ngo` ADD CONSTRAINT `tbl_comment_ngo_nGOId_fkey` FOREIGN KEY (`nGOId`) REFERENCES `tbl_ngo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

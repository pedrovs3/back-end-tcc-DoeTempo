/*
  Warnings:

  - You are about to drop the column `likes` on the `tbl_comment` table. All the data in the column will be lost.
  - You are about to drop the column `nGOId` on the `tbl_comment_ngo` table. All the data in the column will be lost.
  - You are about to drop the column `photoURL` on the `tbl_ngo` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `tbl_post` table. All the data in the column will be lost.
  - You are about to drop the column `photoURL` on the `tbl_user` table. All the data in the column will be lost.
  - Added the required column `id_ngo` to the `tbl_comment_ngo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tbl_comment_ngo` DROP FOREIGN KEY `tbl_comment_ngo_nGOId_fkey`;


-- AlterTable
ALTER TABLE `tbl_comment` DROP COLUMN `likes`;

-- AlterTable
ALTER TABLE `tbl_comment_ngo` DROP COLUMN `nGOId`,
    ADD COLUMN `id_ngo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `tbl_ngo` DROP COLUMN `photoURL`,
--    ADD COLUMN `created_at` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `photo_url` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fshapes-1682345333624.svg?alt=media&token=813975f8-b9ef-443b-b868-ec8733d4f096';

-- AlterTable
ALTER TABLE `tbl_post` DROP COLUMN `likes`;

-- AlterTable
ALTER TABLE `tbl_user` DROP COLUMN `photoURL`,
    ADD COLUMN `banner_photo` VARCHAR(191) NOT NULL DEFAULT 'https://nashvillejazz.org/wp-content/uploads/2022/03/Volunteer-banner.png',
    ADD COLUMN `photo_url` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fthumbs-1682345055241.svg?alt=media&token=eb57a2d6-0240-4f32-b05d-079ff19ed160';

-- CreateTable
CREATE TABLE `tbl_likes` (
    `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    `id_user` VARCHAR(191) NOT NULL,
    `id_post` VARCHAR(191) NOT NULL,
    `id_comment` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_likes_id_key`(`id`),
    UNIQUE INDEX `tbl_likes_id_user_key`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `tbl_comment_ngo_nGOId_fkey` ON `tbl_comment_ngo`(`id_ngo`);

-- AddForeignKey
ALTER TABLE `tbl_comment_ngo` ADD CONSTRAINT `tbl_comment_ngo_id_ngo_fkey` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_likes` ADD CONSTRAINT `tbl_likes_id_comment_fkey` FOREIGN KEY (`id_comment`) REFERENCES `tbl_comment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_likes` ADD CONSTRAINT `tbl_likes_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_likes` ADD CONSTRAINT `tbl_likes_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

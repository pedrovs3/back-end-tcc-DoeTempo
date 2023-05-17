/*
  Warnings:

  - A unique constraint covering the columns `[id_ngo,id_post]` on the table `tbl_post_likes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_user,id_post]` on the table `tbl_post_likes` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `tbl_ngo` ADD COLUMN `attached_link` VARCHAR(191) NULL,
    ADD COLUMN `banner_photo` VARCHAR(191) NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/doe-tempo-50ccb.appspot.com/o/images%2Fimage%2030.svg?alt=media&token=5ea50da8-a824-42b6-aad8-34a24cee5cae';

-- AlterTable
ALTER TABLE `tbl_user` ADD COLUMN `description` TEXT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ngoLike` ON `tbl_post_likes`(`id_ngo`, `id_post`);

-- CreateIndex
CREATE UNIQUE INDEX `userLike` ON `tbl_post_likes`(`id_user`, `id_post`);

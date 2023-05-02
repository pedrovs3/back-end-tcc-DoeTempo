/*
  Warnings:

  - You are about to drop the `commentlikes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `commentlikes` DROP FOREIGN KEY `CommentLikes_id_comment_fkey`;

-- DropForeignKey
ALTER TABLE `commentlikes` DROP FOREIGN KEY `CommentLikes_id_ngo_fkey`;

-- DropForeignKey
ALTER TABLE `commentlikes` DROP FOREIGN KEY `CommentLikes_id_user_fkey`;

-- DropTable
DROP TABLE `commentlikes`;

-- CreateTable
CREATE TABLE `tbl_comment_likes` (
    `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    `id_comment` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NULL,
    `id_ngo` VARCHAR(191) NULL,

    UNIQUE INDEX `tbl_comment_likes_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_comment_likes` ADD CONSTRAINT `tbl_comment_likes_id_ngo_fkey` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_comment_likes` ADD CONSTRAINT `tbl_comment_likes_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_comment_likes` ADD CONSTRAINT `tbl_comment_likes_id_comment_fkey` FOREIGN KEY (`id_comment`) REFERENCES `tbl_comment`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

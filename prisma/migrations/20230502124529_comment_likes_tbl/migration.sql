/*
  Warnings:

  - You are about to drop the `tbl_likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tbl_likes` DROP FOREIGN KEY `tbl_likes_id_comment_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_likes` DROP FOREIGN KEY `tbl_likes_id_post_fkey`;

-- DropForeignKey
ALTER TABLE `tbl_likes` DROP FOREIGN KEY `tbl_likes_id_user_fkey`;

-- DropTable
DROP TABLE `tbl_likes`;

-- CreateTable
CREATE TABLE `CommentLikes` (
    `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    `id_comment` VARCHAR(191) NOT NULL,
    `id_user` VARCHAR(191) NULL,
    `id_ngo` VARCHAR(191) NULL,

    UNIQUE INDEX `CommentLikes_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CommentLikes` ADD CONSTRAINT `CommentLikes_id_ngo_fkey` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `CommentLikes` ADD CONSTRAINT `CommentLikes_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `CommentLikes` ADD CONSTRAINT `CommentLikes_id_comment_fkey` FOREIGN KEY (`id_comment`) REFERENCES `tbl_comment`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

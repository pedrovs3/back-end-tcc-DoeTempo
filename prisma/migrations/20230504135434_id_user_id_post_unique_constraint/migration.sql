/*
  Warnings:

  - A unique constraint covering the columns `[id_user,id_post]` on the table `tbl_post_likes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `tbl_post_likes_id_ngo_id_post_idx` ON `tbl_post_likes`;

-- DropIndex
DROP INDEX `tbl_post_likes_id_user_id_post_idx` ON `tbl_post_likes`;

-- CreateIndex
CREATE UNIQUE INDEX `userLike` ON `tbl_post_likes`(`id_user`, `id_post`);

-- RenameIndex
ALTER TABLE `tbl_post_likes` RENAME INDEX `tbl_post_likes_id_ngo_id_post_key` TO `ngoLike`;

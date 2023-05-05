/*
  Warnings:

  - A unique constraint covering the columns `[id_ngo,id_post]` on the table `tbl_post_likes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX `tbl_post_likes_id_user_id_post_idx` ON `tbl_post_likes`(`id_user`, `id_post`);

-- CreateIndex
CREATE INDEX `tbl_post_likes_id_ngo_id_post_idx` ON `tbl_post_likes`(`id_ngo`, `id_post`);

-- CreateIndex
CREATE UNIQUE INDEX `tbl_post_likes_id_ngo_id_post_key` ON `tbl_post_likes`(`id_ngo`, `id_post`);

-- -- RenameIndex
-- ALTER TABLE `tbl_post_likes` RENAME INDEX `tbl_post_likes_id_ngo_fkey` TO `tbl_post_likes_id_ngo_idx`;
--
-- -- RenameIndex
-- ALTER TABLE `tbl_post_likes` RENAME INDEX `tbl_post_likes_id_user_fkey` TO `tbl_post_likes_id_user_idx`;

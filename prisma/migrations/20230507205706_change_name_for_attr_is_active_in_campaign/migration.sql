-- CreateIndex
CREATE INDEX `tbl_post_likes_id_user_fkey` ON `tbl_post_likes`(`id_user`);

-- CreateIndex
CREATE INDEX `tbl_post_likes_id_ngo_fkey` ON `tbl_post_likes`(`id_ngo`);

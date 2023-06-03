/*
  Warnings:

  - A unique constraint covering the columns `[id_ngo,id_post]` on the table `tbl_post_likes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_user,id_post]` on the table `tbl_post_likes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ngoLike` ON `tbl_post_likes`(`id_ngo`, `id_post`);

-- CreateIndex
CREATE UNIQUE INDEX `userLike` ON `tbl_post_likes`(`id_user`, `id_post`);

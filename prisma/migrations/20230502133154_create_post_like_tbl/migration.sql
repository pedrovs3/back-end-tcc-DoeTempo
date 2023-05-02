-- CreateTable
CREATE TABLE `tbl_post_likes` (
    `id` VARCHAR(191) NOT NULL DEFAULT (uuid()),
    `id_user` VARCHAR(191) NULL,
    `id_ngo` VARCHAR(191) NULL,
    `id_post` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tbl_post_likes_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_post_likes` ADD CONSTRAINT `tbl_post_likes_id_ngo_fkey` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_post_likes` ADD CONSTRAINT `tbl_post_likes_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_post_likes` ADD CONSTRAINT `tbl_post_likes_id_post_fkey` FOREIGN KEY (`id_post`) REFERENCES `tbl_post`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

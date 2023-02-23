-- CreateTable
CREATE TABLE `tbl_user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(256) NOT NULL,
    `password` VARCHAR(90) NOT NULL,
    `cpf` VARCHAR(17) NOT NULL,
    `id_gender` CHAR(36) NOT NULL,
    `birthdate` TIME(0) NOT NULL,
    `rg` VARCHAR(30) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `email_UNIQUE`(`email`),
    UNIQUE INDEX `cpf_UNIQUE`(`cpf`),
    INDEX `fk_tbl_user_tbl_gender_idx`(`id_gender`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_gender` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `abbreviation` CHAR(1) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `name_UNIQUE`(`name`),
    UNIQUE INDEX `abbreviation_UNIQUE`(`abbreviation`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_phone` (
    `id` VARCHAR(191) NOT NULL,
    `number` VARCHAR(20) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_address` (
    `id` VARCHAR(191) NOT NULL,
    `postal_code` VARCHAR(14) NOT NULL,
    `number` VARCHAR(7) NOT NULL,
    `complement` VARCHAR(100) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_user_address` (
    `id` VARCHAR(191) NOT NULL,
    `id_address` CHAR(36) NOT NULL,
    `id_user` CHAR(36) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_tbl_user_address_tbl_address1_idx`(`id_address`),
    INDEX `fk_tbl_user_address_tbl_user1_idx`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_campaign` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,
    `begin_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `home_office` BOOLEAN NOT NULL DEFAULT false,
    `id_ngo` CHAR(36) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    UNIQUE INDEX `title_UNIQUE`(`title`),
    INDEX `fk_tbl_campaign_tbl_ngo1_idx`(`id_ngo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_campaign_address` (
    `id` VARCHAR(191) NOT NULL,
    `id_campaign` CHAR(36) NOT NULL,
    `id_address` CHAR(36) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_tbl_campaign_address_tbl_address1_idx`(`id_address`),
    INDEX `fk_tbl_campaign_address_tbl_campaign1_idx`(`id_campaign`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_campaign_causes` (
    `id` VARCHAR(191) NOT NULL,
    `id_cause` VARCHAR(191) NOT NULL,
    `id_campaign` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_tbl_campaign_causes_tbl_campaign1_idx`(`id_campaign`),
    INDEX `fk_tbl_campaign_causes_tbl_causes1_idx`(`id_cause`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_campaign_participants` (
    `id` VARCHAR(191) NOT NULL,
    `id_campaign` CHAR(36) NOT NULL,
    `id_user` CHAR(36) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_tbl_campaign_participants_tbl_campaign1_idx`(`id_campaign`),
    INDEX `fk_tbl_campaign_participants_tbl_user1_idx`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_campaign_photos` (
    `id` VARCHAR(191) NOT NULL,
    `photo_url` VARCHAR(256) NOT NULL,
    `id_campaign` CHAR(36) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_tbl_campaign_photos_tbl_campaign1_idx`(`id_campaign`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_causes` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `description` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_following` (
    `id` VARCHAR(191) NOT NULL,
    `id_user` CHAR(36) NOT NULL,
    `id_ngo` CHAR(36) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_tbl_following_tbl_ngo1_idx`(`id_ngo`),
    INDEX `fk_tbl_following_tbl_user1_idx`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_ngo` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `cnpj` VARCHAR(17) NOT NULL,
    `foundation_date` DATE NULL,
    `description` TEXT NULL,
    `email` VARCHAR(256) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_ngo_address` (
    `id` VARCHAR(191) NOT NULL,
    `id_ngo` CHAR(36) NOT NULL,
    `id_address` CHAR(36) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_tbl_ngo_address_tbl_address1_idx`(`id_address`),
    INDEX `fk_tbl_ngo_address_tbl_ngo1_idx`(`id_ngo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_ngo_causes` (
    `id` VARCHAR(191) NOT NULL,
    `id_causes` CHAR(36) NOT NULL,
    `id_ngo` CHAR(36) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_tbl_ngo_causes_tbl_causes1_idx`(`id_causes`),
    INDEX `fk_tbl_ngo_causes_tbl_ngo1_idx`(`id_ngo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_ngo_phone` (
    `id` VARCHAR(191) NOT NULL,
    `id_ngo` CHAR(36) NOT NULL,
    `id_phone` CHAR(36) NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_tbl_ngo_phone_tbl_ngo1_idx`(`id_ngo`),
    INDEX `fk_tbl_ngo_phone_tbl_phone1_idx`(`id_phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_user_phone` (
    `id` VARCHAR(191) NOT NULL,
    `id_phone` CHAR(36) NOT NULL,
    `id_user` CHAR(36) NOT NULL,

    INDEX `fk_tbl_user_phone_tbl_phone1_idx`(`id_phone`),
    INDEX `fk_tbl_user_phone_tbl_user1_idx`(`id_user`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_user` ADD CONSTRAINT `fk_tbl_user_tbl_gender` FOREIGN KEY (`id_gender`) REFERENCES `tbl_gender`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_user_address` ADD CONSTRAINT `fk_tbl_user_address_tbl_address1` FOREIGN KEY (`id_address`) REFERENCES `tbl_address`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_user_address` ADD CONSTRAINT `fk_tbl_user_address_tbl_user1` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign` ADD CONSTRAINT `fk_tbl_campaign_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_address` ADD CONSTRAINT `fk_tbl_campaign_address_tbl_address1` FOREIGN KEY (`id_address`) REFERENCES `tbl_address`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_address` ADD CONSTRAINT `fk_tbl_campaign_address_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_causes` ADD CONSTRAINT `fk_tbl_campaign_causes_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_causes` ADD CONSTRAINT `fk_tbl_campaign_causes_tbl_causes1` FOREIGN KEY (`id_cause`) REFERENCES `tbl_causes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_participants` ADD CONSTRAINT `fk_tbl_campaign_participants_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_participants` ADD CONSTRAINT `fk_tbl_campaign_participants_tbl_user1` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_campaign_photos` ADD CONSTRAINT `fk_tbl_campaign_photos_tbl_campaign1` FOREIGN KEY (`id_campaign`) REFERENCES `tbl_campaign`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_following` ADD CONSTRAINT `fk_tbl_following_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_following` ADD CONSTRAINT `fk_tbl_following_tbl_user1` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ngo_address` ADD CONSTRAINT `fk_tbl_ngo_address_tbl_address1` FOREIGN KEY (`id_address`) REFERENCES `tbl_address`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ngo_address` ADD CONSTRAINT `fk_tbl_ngo_address_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ngo_causes` ADD CONSTRAINT `fk_tbl_ngo_causes_tbl_causes1` FOREIGN KEY (`id_causes`) REFERENCES `tbl_causes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ngo_causes` ADD CONSTRAINT `fk_tbl_ngo_causes_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ngo_phone` ADD CONSTRAINT `fk_tbl_ngo_phone_tbl_ngo1` FOREIGN KEY (`id_ngo`) REFERENCES `tbl_ngo`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_ngo_phone` ADD CONSTRAINT `fk_tbl_ngo_phone_tbl_phone1` FOREIGN KEY (`id_phone`) REFERENCES `tbl_phone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_user_phone` ADD CONSTRAINT `fk_tbl_user_phone_tbl_phone1` FOREIGN KEY (`id_phone`) REFERENCES `tbl_phone`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `tbl_user_phone` ADD CONSTRAINT `fk_tbl_user_phone_tbl_user1` FOREIGN KEY (`id_user`) REFERENCES `tbl_user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

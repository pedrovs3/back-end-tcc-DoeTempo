-- RenameIndex
ALTER TABLE `tbl_attached_link` RENAME INDEX `tbl_attached_link_id_ngo_fkey` TO `tbl_attached_link_id_ngo_idx`;

-- RenameIndex
ALTER TABLE `tbl_attached_link` RENAME INDEX `tbl_attached_link_id_user_fkey` TO `tbl_attached_link_id_user_idx`;

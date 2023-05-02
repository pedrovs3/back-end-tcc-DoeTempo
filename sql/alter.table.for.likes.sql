SELECT * FROM db_doe_tempo_tcc.commentlikes;

ALTER TABLE tbl_comment_likes ADD CONSTRAINT check_likes CHECK (
    (id_user IS NOT NULL AND id_ngo IS NULL) OR
    (id_ngo IS NOT NULL AND id_user IS NULL)
);

ALTER TABLE tbl_post_likes ADD CONSTRAINT check_likes CHECK (
    (id_user IS NOT NULL AND id_ngo IS NULL) OR
    (id_ngo IS NOT NULL AND id_user IS NULL)
);


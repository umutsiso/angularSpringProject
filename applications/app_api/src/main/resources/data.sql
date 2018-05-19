INSERT INTO NOTE (note_id, title, description, note_type, date_written)
VALUES ('123', 'Test1', 'Tis Test1', 'GOALS', '2015-01-01');

INSERT INTO NOTE (note_id, title, description, note_type, date_written)
VALUES ('3434', 'Test2', 'Tis Test2', 'TODOS', '2015-01-01');

INSERT INTO NOTE (note_id, title, description, note_type, date_written)
VALUES ('34', 'Test3', 'Tis Test3', 'RANT', '2015-01-01');

INSERT INTO NOTE (note_id, title, description, note_type, date_written)
VALUES ('4545', 'Test4', 'Tis Test4', 'KEEPINMIND', '2015-01-01');

INSERT INTO NOTE_ENTRY (note_note_id, entry)
VALUES ('123', 'THIS IS THE FIRST ENTRY OF MANY !!!');
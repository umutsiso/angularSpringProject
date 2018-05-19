CREATE TABLE NOTE (
  note_id int IDENTITY not null,
  title VARCHAR(10) null,
  description VARCHAR(10) null,
  note_type VARCHAR(10) null,
  date_written DATE null
);


CREATE TABLE NOTE_ENTRY (
  note_note_id int IDENTITY not null,
  entry VARCHAR(2000) null
)
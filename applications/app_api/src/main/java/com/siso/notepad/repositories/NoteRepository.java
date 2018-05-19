package com.siso.notepad.repositories;

import com.siso.notepad.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note, Integer>{

    @Query("SELECT n FROM Note n")
    List<Note> getAllNotes();
}

package com.siso.notepad.repositories;

import com.siso.notepad.entities.NoteEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteEntryRepository extends JpaRepository<NoteEntry, Integer>{

    @Query("SELECT e FROM NoteEntry e WHERE e.id = :noteId")
    NoteEntry selectOne(@Param("noteId") Integer noteId);
}

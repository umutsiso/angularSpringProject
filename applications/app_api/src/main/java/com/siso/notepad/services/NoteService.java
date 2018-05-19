package com.siso.notepad.services;

import com.siso.notepad.entities.Note;
import com.siso.notepad.entities.NoteEntry;
import com.siso.notepad.repositories.NoteEntryRepository;
import com.siso.notepad.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private NoteEntryRepository noteEntryRepository;

    public List<Note> getAllNotes() {
        return noteRepository.getAllNotes();
    }

    public NoteEntry getOne(Integer noteId) {
        return noteEntryRepository.selectOne(noteId);
    }


}

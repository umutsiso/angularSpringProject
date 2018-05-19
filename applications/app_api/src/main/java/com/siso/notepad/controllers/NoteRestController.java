package com.siso.notepad.controllers;


import com.siso.notepad.services.NoteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoteRestController {

    private final NoteService noteService;

    public NoteRestController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping(value = "/note_entry/{noteId}")
    public String getNoteEntry(@PathVariable("noteId") Integer noteId){
        return noteService.getOne(noteId).getEntry();
    }
}

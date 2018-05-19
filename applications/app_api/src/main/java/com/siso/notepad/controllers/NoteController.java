package com.siso.notepad.controllers;


import com.siso.notepad.entities.Note;
import com.siso.notepad.services.NoteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@Slf4j
public class NoteController {

    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @RequestMapping({"", "/", "/index"})
    public String getAllNotes(Model model){
        model.addAttribute("notes", noteService.getAllNotes());

        List<Note> notes = noteService.getAllNotes();
        log.debug(notes.get(0).getTitle());

        return "index";
    }
}

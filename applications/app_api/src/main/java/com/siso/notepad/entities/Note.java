package com.siso.notepad.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Value;

import javax.persistence.*;
import java.util.Date;

@Entity
@Builder
@Value
@AllArgsConstructor
@NoArgsConstructor(force = true)
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer noteId;

    private String title;

    private String description;

//    @OneToOne(mappedBy = "note", cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
//    private NoteEntry body;

    @Enumerated(EnumType.STRING)
    private NoteType noteType;

    @Temporal(TemporalType.DATE)
    Date dateWritten;


}

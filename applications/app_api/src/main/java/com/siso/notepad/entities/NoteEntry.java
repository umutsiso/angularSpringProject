package com.siso.notepad.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Value;

import javax.persistence.*;

@Entity
@Builder
@Value
@AllArgsConstructor
@NoArgsConstructor(force = true)
@Table(name = "note_entry")
public class NoteEntry {

    @Id
    @Column(name = "note_note_id")
    private Integer id;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    private Note note;

    private String entry;

}

package com.siso.notepad;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.siso.notepad")
public class NotepadApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotepadApplication.class, args);
	}
}

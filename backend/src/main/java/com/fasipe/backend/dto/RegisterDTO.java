package com.fasipe.backend.dto;

import java.time.Instant;

import com.fasipe.backend.entities.Register;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegisterDTO {
	
	@Size(min = 8, max = 30, message = "nome precisa ser de 8 a 30 caracter")
	@NotBlank(message = "campo requerido")
	private String name;
	
	@Size(min = 8, max = 60, message = "nome precisa ser de 8 a 60 caracter")
	@NotBlank(message = "campo requerido")
	private String course;
	private Instant date;
	
	@SuppressWarnings("unused")
	public RegisterDTO() {
		
	}

	public RegisterDTO(String name, String course) {
		this.name = name;
		this.course = course;
	}
	
	public RegisterDTO(Register entity) {
		name = entity.getName();
		course = entity.getCourse();
		date = entity.getDate();	
	}

	public String getName() {
		return name;
	}

	public String getCourse() {
		return course;
	}

	public Instant getDate() {
		return date;
	}
}

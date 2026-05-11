package com.fasipe.backend.dto;

import java.time.Instant;

import com.fasipe.backend.entities.Register;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;

public class RegisterDTO {
	
	private Long id;
	
	@Size(min = 8, max = 80, message = "nome precisa ser de 8 a 80 caracter")
	@NotBlank(message = "campo requerido")
	private String name;
	
	@PositiveOrZero(message = "por favor, preencher a quantidade de convidados")
	private Integer companion;
	
	@Size(min = 5, max = 60, message = "por favor, preencher o campo curso")
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
		id = entity.getId();
		name = entity.getName();
		companion = entity.getCompanion();
		course = entity.getCourse();
		date = entity.getDate();	
	}
	
	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}
	
	public Integer getCompanion() {
		return companion;
	}

	public String getCourse() {
		return course;
	}

	public Instant getDate() {
		return date;
	}
}

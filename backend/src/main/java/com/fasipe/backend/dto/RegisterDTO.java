package com.fasipe.backend.dto;

import java.time.Instant;

import com.fasipe.backend.entities.Register;

public class RegisterDTO {
	
	private String name;
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

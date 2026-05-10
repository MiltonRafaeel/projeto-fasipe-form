package com.fasipe.backend.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasipe.backend.dto.RegisterDTO;
import com.fasipe.backend.entities.Register;
import com.fasipe.backend.repositories.RegisterRepository;

import jakarta.transaction.Transactional;

@Service
public class RegisterService {

	@Autowired
	private RegisterRepository repository;

	@Transactional
	public RegisterDTO insert(RegisterDTO dto) {

		Register entity = new Register();
		copyDtoToEntity(dto, entity);

		entity = repository.save(entity);
		return new RegisterDTO(entity);
	}

	public void copyDtoToEntity(RegisterDTO dto, Register entity) {
		entity.setId(dto.getId());
		entity.setName(dto.getName());
		entity.setCompanion(dto.getCompanion());
		entity.setCourse(dto.getCourse());
		entity.setDate(Instant.now());
	}
}

package com.fasipe.backend.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fasipe.backend.dto.RegisterDTO;
import com.fasipe.backend.services.RegisterService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/registers")
public class RegisterController {
	
	@Autowired
	private RegisterService service;
	
	@PostMapping
	public ResponseEntity<RegisterDTO> insert(@Valid @RequestBody RegisterDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(dto.getName()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}

}

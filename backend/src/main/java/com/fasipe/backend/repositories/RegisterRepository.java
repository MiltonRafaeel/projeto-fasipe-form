package com.fasipe.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fasipe.backend.entities.Register;

public interface RegisterRepository extends JpaRepository<Register, Long> {

}

package com.example.server.service;

import com.example.server.dto.ProfessorDto;
import com.example.server.model.Professor;
import com.example.server.repository.ProfessorRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
@AllArgsConstructor
public class ProfessorService {
    private final ProfessorRepository repository;

    @Transactional
    public void create(ProfessorDto dto) {
        Professor professor = new Professor();
        professor.setProfName(dto.getProfName());
        professor.setSchoolName(dto.getSchoolName());
        professor.setCreatedDate(Instant.now());
        repository.save(professor);
    }
}

package com.example.server.service;

import com.example.server.dto.ProfessorDto;
import com.example.server.exceptions.NotFoundException;
import com.example.server.model.Professor;
import com.example.server.repository.ProfessorRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

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
        professor.setPosts(new ArrayList<>());
        repository.save(professor);
    }

    @Transactional(readOnly = true)
    public List<ProfessorDto> getAll() {
        List<ProfessorDto> dtos = new ArrayList<>();
        List<Professor> professors = repository.findAll();
        for (Professor professor : professors) {
            ProfessorDto dto = new ProfessorDto();
            dto.setId(professor.getId());
            dto.setProfName(professor.getProfName());
            dto.setSchoolName(professor.getSchoolName());
            dto.setCreatedDate(professor.getCreatedDate());
            dto.setPosts(professor.getPosts());
            dtos.add(dto);
        }
        return dtos;
    }

    @Transactional(readOnly = true)
    public ProfessorDto get(Long id) {
        ProfessorDto dto = new ProfessorDto();
        Professor professor = repository.findById(id).orElseThrow(() -> new NotFoundException("Id " + id + " not found"));
        dto.setId(professor.getId());
        dto.setId(professor.getId());
        dto.setProfName(professor.getProfName());
        dto.setSchoolName(professor.getSchoolName());
        dto.setCreatedDate(professor.getCreatedDate());
        dto.setPosts(professor.getPosts());
        return dto;
    }
}

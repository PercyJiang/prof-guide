package com.example.server.service;

import com.example.server.dto.ProfessorDto;
import com.example.server.model.Professor;
import com.example.server.repository.ProfessorRepository;
import lombok.AllArgsConstructor;
import org.json.JSONObject;
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
    public JSONObject create(ProfessorDto dto) {
        Professor professor = new Professor();
        professor.setProfName(dto.getProfName());
        professor.setSchoolName(dto.getSchoolName());
        professor.setCreatedDate(Instant.now());
        professor.setPosts(new ArrayList<>());
        repository.save(professor);
        JSONObject json = new JSONObject();
        json.put("message", "Professor Create Success");
        return json;
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
        Professor professor = repository.findById(id).orElse(null);
        if (professor == null) return null;
        dto.setId(professor.getId());
        dto.setProfName(professor.getProfName());
        dto.setSchoolName(professor.getSchoolName());
        dto.setCreatedDate(professor.getCreatedDate());
        dto.setPosts(professor.getPosts());
        return dto;
    }

    @Transactional
    public JSONObject update(Long id, ProfessorDto dto) {
        JSONObject json = new JSONObject();
        Professor professor = repository.findById(id).orElse(null);
        if (professor == null) {
            json.put("message", "Professor id " + id + " not found");
            return json;
        }
        professor.setProfName(dto.getProfName());
        professor.setSchoolName(dto.getSchoolName());
        repository.save(professor);
        json.put("message", "Professor Update Success");
        return json;
    }

    @Transactional
    public JSONObject delete(Long id) {
        JSONObject json = new JSONObject();
        Professor professor = repository.findById(id).orElse(null);
        if (professor == null) {
            json.put("message", "Professor id " + id + " not found");
            return json;
        }
        repository.deleteById(id);
        json.put("message", "Professor Delete Success");
        return json;
    }
}

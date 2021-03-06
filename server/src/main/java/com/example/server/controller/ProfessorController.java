package com.example.server.controller;

import com.example.server.dto.ProfessorDto;
import com.example.server.service.ProfessorService;
import lombok.AllArgsConstructor;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prof")
@AllArgsConstructor
public class ProfessorController {

    private final ProfessorService service;

    @GetMapping("/hello")
    public String hello() {
        return "Hello " + getClass().getName();
    }

    @PostMapping("/create")
    public ResponseEntity<JSONObject> create(@RequestBody ProfessorDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(dto));
    }

    @GetMapping
    public ResponseEntity<List<ProfessorDto>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProfessorDto> get(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(service.get(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<JSONObject> update(@PathVariable Long id, @RequestBody ProfessorDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<JSONObject> delete(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.delete(id));
    }
}

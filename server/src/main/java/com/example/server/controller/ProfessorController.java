package com.example.server.controller;

import com.example.server.dto.ProfessorDto;
import com.example.server.service.ProfessorService;
import lombok.AllArgsConstructor;
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
    public ResponseEntity<String> create(@RequestBody ProfessorDto dto) {
        service.create(dto);
        return new ResponseEntity<>("Professor Create Success", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<ProfessorDto>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(service.getAll());
    }
}

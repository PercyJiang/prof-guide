package com.example.server.controller;

import com.example.server.dto.PostDto;
import com.example.server.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/post")
@AllArgsConstructor
public class PostController {

    private final PostService service;

    @GetMapping("/hello")
    public String hello() {
        return "Hello " + getClass().getName();
    }

    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody PostDto dto) {
        service.create(dto);
        return new ResponseEntity<>("Post Create Success", HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<PostDto>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PostDto> get(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(service.get(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody PostDto dto) {
        service.update(id, dto);
        return new ResponseEntity<>("Post Update Success", HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        service.delete(id);
        return new ResponseEntity<>("Post Delete Success", HttpStatus.ACCEPTED);
    }
}

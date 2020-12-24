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
        return new ResponseEntity<>("Post Create Success", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<PostDto>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(service.getAll());
    }
}

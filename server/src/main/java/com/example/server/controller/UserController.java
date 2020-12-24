package com.example.server.controller;

import com.example.server.dto.UserDto;
import com.example.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping("/hello")
    public String hello() {
        return "Hello " + getClass().getName();
    }

    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody UserDto dto) {
        service.create(dto);
        return new ResponseEntity<>("User Create Success", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(service.getAll());
    }

}

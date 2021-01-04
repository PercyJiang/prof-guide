package com.example.server.controller;

import com.example.server.dto.UserDto;
import com.example.server.service.UserService;
import lombok.AllArgsConstructor;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    private final UserService service;

    @GetMapping("/hello")
    public ResponseEntity<HashMap<String, String>> hello() {
        HashMap<String, String> json = new HashMap<>();
        json.put("message", "User Controller Hello");
        return new ResponseEntity<>(json, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<JSONObject> create(@RequestBody UserDto dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(dto));
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> get(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(service.get(id));
    }

}

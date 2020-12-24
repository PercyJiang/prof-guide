package com.example.server.controller;

import com.example.server.dto.UserDto;
import com.example.server.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }

    @PostMapping("/create")
    public ResponseEntity<String> create(@RequestBody UserDto dto) {
        userService.create(dto);
        return new ResponseEntity<>("User Create Success", HttpStatus.OK);
    }

}

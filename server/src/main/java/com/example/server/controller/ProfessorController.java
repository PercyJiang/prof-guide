package com.example.server.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/prof")
@AllArgsConstructor
public class ProfessorController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello " + getClass().getName();
    }
}
package com.example.server.dto;

import com.example.server.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
    private Long id;
    private Integer score;
    private Integer difficulty;
    private String comment;
    private User user;
    private ProfessorDto professor;
}

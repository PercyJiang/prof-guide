package com.example.server.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import static javax.persistence.FetchType.LAZY;
import static javax.persistence.GenerationType.IDENTITY;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Post {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    @NotBlank(message = "Score is required")
    private Integer score;
    @NotBlank(message = "Difficulty is required")
    private Integer difficulty;
    @NotBlank(message = "Comment is required")
    private String comment;
    @ManyToOne(fetch = LAZY)
    private User user;
    @ManyToOne(fetch = LAZY)
    private Professor professor;
}

package com.example.server.dto;

import com.example.server.model.Post;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfessorDto {
    private Long id;
    private String profName;
    private String schoolName;
    private List<Post> posts;
    private Instant createdDate;
}

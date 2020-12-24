package com.example.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProfessorDto {
    private Long id;
    private String profName;
    private String schoolName;
    private Integer sizeOfPosts;
}

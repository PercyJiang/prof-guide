package com.example.server.service;

import com.example.server.dto.PostDto;
import com.example.server.model.Post;
import com.example.server.repository.PostRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class PostService {

    private final PostRepository repository;

    @Transactional
    public void create(PostDto dto) {
        Post post = new Post();
        post.setScore(dto.getScore());
        post.setDifficulty(dto.getDifficulty());
        post.setComment(dto.getComment());
        post.setUser(dto.getUser());
        post.setProfessor(dto.getProfessor());
        repository.save(post);
    }
}

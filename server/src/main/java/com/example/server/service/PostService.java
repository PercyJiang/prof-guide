package com.example.server.service;

import com.example.server.dto.PostDto;
import com.example.server.exceptions.NotFoundException;
import com.example.server.model.Post;
import com.example.server.repository.PostRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

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

    @Transactional(readOnly = true)
    public List<PostDto> getAll() {
        List<PostDto> dtos = new ArrayList<>();
        List<Post> posts = repository.findAll();
        for (Post post : posts) {
            PostDto dto = new PostDto();
            dto.setId(post.getId());
            dto.setScore(post.getScore());
            dto.setDifficulty(post.getDifficulty());
            dto.setComment(post.getComment());
            dto.setProfessor(post.getProfessor());
            dto.setUser(post.getUser());
            dtos.add(dto);
        }
        return dtos;
    }

    @Transactional(readOnly = true)
    public PostDto get(Long id) {
        PostDto dto = new PostDto();
        Post post = repository.findById(id).orElseThrow(() -> new NotFoundException("Id " + id + " not found"));
        dto.setId(post.getId());
        dto.setScore(post.getScore());
        dto.setDifficulty(post.getDifficulty());
        dto.setComment(post.getComment());
        dto.setProfessor(post.getProfessor());
        dto.setUser(post.getUser());
        return dto;
    }

    @Transactional
    public void update(Long id, PostDto dto) {
        Post post = repository.findById(id).orElseThrow(() -> new NotFoundException("Id " + id + " not found"));
        post.setScore(dto.getScore());
        post.setDifficulty(dto.getDifficulty());
        post.setComment(dto.getComment());
        repository.save(post);
    }

    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }
}

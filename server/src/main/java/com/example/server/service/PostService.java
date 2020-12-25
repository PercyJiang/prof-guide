package com.example.server.service;

import com.example.server.dto.PostDto;
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
    public String create(PostDto dto) {
        Post post = new Post();
        post.setScore(dto.getScore());
        post.setDifficulty(dto.getDifficulty());
        post.setComment(dto.getComment());
        post.setUser(dto.getUser());
        post.setProfessor(dto.getProfessor());
        repository.save(post);
        return "Post Create Success";
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
        Post post = repository.findById(id).orElse(null);
        if (post == null) return null;
        dto.setId(post.getId());
        dto.setScore(post.getScore());
        dto.setDifficulty(post.getDifficulty());
        dto.setComment(post.getComment());
        dto.setProfessor(post.getProfessor());
        dto.setUser(post.getUser());
        return dto;
    }

    @Transactional
    public String update(Long id, PostDto dto) {
        Post post = repository.findById(id).orElse(null);
        if (post == null) return "Post id " + id + " not found";
        post.setScore(dto.getScore());
        post.setDifficulty(dto.getDifficulty());
        post.setComment(dto.getComment());
        repository.save(post);
        return "Post Update Success";
    }

    @Transactional
    public String delete(Long id) {
        Post post = repository.findById(id).orElse(null);
        if (post == null) return "Post id " + id + " not found";
        repository.deleteById(id);
        return "Post Delete Success";
    }
}

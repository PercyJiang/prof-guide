package com.example.server.service;

import com.example.server.dto.PostDto;
import com.example.server.dto.ProfessorDto;
import com.example.server.model.Post;
import com.example.server.model.Professor;
import com.example.server.repository.PostRepository;
import lombok.AllArgsConstructor;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
@AllArgsConstructor
public class PostService {

    private final PostRepository repository;

    @Transactional
    public HashMap<String, String> create(PostDto dto) {
        Professor professor = new Professor();
        professor.setId(dto.getProfessor().getId());

        Post post = new Post();
        post.setScore(dto.getScore());
        post.setDifficulty(dto.getDifficulty());
        post.setComment(dto.getComment());
        post.setUser(dto.getUser());
        post.setProfessor(professor);
        repository.save(post);
        HashMap<String, String> json = new HashMap<>();
        json.put("message", "Post Create Success");
        return json;
    }

    @Transactional(readOnly = true)
    public List<PostDto> getAll() {
        List<PostDto> dtos = new ArrayList<>();
        List<Post> posts = repository.findAll();
        for (Post post : posts) {
            dtos.add(this.get(post.getId()));
        }
        return dtos;
    }

    @Transactional(readOnly = true)
    public PostDto get(Long id) {
        Post post = repository.findById(id).orElse(null);
        if (post == null) return null;

        ProfessorDto professor = new ProfessorDto();
        professor.setId(post.getProfessor().getId());

        PostDto dto = new PostDto();
        dto.setId(post.getId());
        dto.setScore(post.getScore());
        dto.setDifficulty(post.getDifficulty());
        dto.setComment(post.getComment());
        dto.setProfessor(professor);
        dto.setUser(post.getUser());
        return dto;
    }

    @Transactional
    public JSONObject update(Long id, PostDto dto) {
        JSONObject json = new JSONObject();
        Post post = repository.findById(id).orElse(null);
        if (post == null) {
            json.put("message", "Post id " + id + " not found");
            return json;
        }
        post.setScore(dto.getScore());
        post.setDifficulty(dto.getDifficulty());
        post.setComment(dto.getComment());
        repository.save(post);
        json.put("message", "Post Update Success");
        return json;
    }

    @Transactional
    public JSONObject delete(Long id) {
        JSONObject json = new JSONObject();
        Post post = repository.findById(id).orElse(null);
        if (post == null) {
            json.put("message", "Post id " + id + " not found");
            return json;
        }
        repository.deleteById(id);
        json.put("message", "Post Delete Success");
        return json;
    }
}

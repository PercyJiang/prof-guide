package com.example.server.service;

import com.example.server.dto.UserDto;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.json.JSONObject;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
@Transactional
public class UserService {

    private final UserRepository repository;

    public JSONObject create(UserDto dto) {
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());
        user.setCreated(Instant.now());
        user.setPosts(new ArrayList<>());
        repository.save(user);
        JSONObject json = new JSONObject();
        json.put("message", "User Create Success");
        return json;
    }

    @Transactional(readOnly = true)
    public List<UserDto> getAll() {
        List<UserDto> dtos = new ArrayList<>();
        List<User> users = repository.findAll();
        for (User user : users) {
            UserDto dto = new UserDto();
            dto.setId(user.getId());
            dto.setUsername(user.getUsername());
            dto.setPassword(user.getPassword());
            dto.setCreated(user.getCreated());
            dto.setPosts(user.getPosts());
            dtos.add(dto);
        }
        return dtos;
    }

    @Transactional(readOnly = true)
    public UserDto get(Long id) {
        UserDto dto = new UserDto();
        User user = repository.findById(id).orElse(null);
        if (user == null) return null;
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setPassword(user.getPassword());
        dto.setCreated(user.getCreated());
        dto.setPosts(user.getPosts());
        return dto;
    }
}

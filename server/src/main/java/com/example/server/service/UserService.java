package com.example.server.service;

import com.example.server.dto.UserDto;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.ArrayList;

@Service
@AllArgsConstructor
@Transactional
public class UserService {

    private final UserRepository repository;

    public void create(UserDto dto) {
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(dto.getPassword());
        user.setCreated(Instant.now());
        user.setPosts(new ArrayList<>());
        repository.save(user);
    }
}

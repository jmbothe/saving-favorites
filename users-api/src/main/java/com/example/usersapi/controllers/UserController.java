package com.example.usersapi.controllers;

import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public User findUserById(@PathVariable Long id) throws NotFoundException {

        User foundUser = userRepository.findOne(id);

        if (foundUser == null) {
            throw new NotFoundException("User with ID of " + id + " was not found!");
        }

        return foundUser;
    }

    @DeleteMapping("/{id}")
    public HttpStatus deleteUserById(@PathVariable Long id) {
        userRepository.delete(id);
        return HttpStatus.OK;
    }

    //EXCEPTION HANDLERS

    @ExceptionHandler
    void handleUserNotFound(
            NotFoundException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value(), exception.getMessage());
    }
}
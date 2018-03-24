package com.example.savingfavorites.repositories;

import com.example.savingfavorites.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}
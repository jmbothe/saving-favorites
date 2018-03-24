package com.example.nyccityrecord.repositories;

import com.example.nyccityrecord.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

}
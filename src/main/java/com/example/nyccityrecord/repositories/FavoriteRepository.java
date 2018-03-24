package com.example.nyccityrecord.repositories;

import com.example.nyccityrecord.models.Favorite;
import org.springframework.data.repository.CrudRepository;

public interface FavoriteRepository extends CrudRepository<Favorite, Long> {

}
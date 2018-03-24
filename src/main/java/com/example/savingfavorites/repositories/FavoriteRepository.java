package com.example.savingfavorites.repositories;

import com.example.savingfavorites.models.Favorite;
import org.springframework.data.repository.CrudRepository;

public interface FavoriteRepository extends CrudRepository<Favorite, Long> {

}
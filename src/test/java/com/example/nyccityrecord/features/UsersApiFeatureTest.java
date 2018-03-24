package com.example.nyccityrecord.features;

import com.example.nyccityrecord.models.Favorite;
import com.example.nyccityrecord.models.User;
import com.example.nyccityrecord.repositories.FavoriteRepository;
import com.example.nyccityrecord.repositories.UserRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Stream;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;
import static io.restassured.http.ContentType.JSON;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.core.Is.is;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class UsersApiFeatureTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Before
    public void setUp() {
        userRepository.deleteAll();
        favoriteRepository.deleteAll();
    }

    @After
    public void tearDown() {
        userRepository.deleteAll();
        favoriteRepository.deleteAll();
    }

    @Test
    public void shouldAllowFullCrudForAUser() throws Exception {

        User firstUser = new User(
            "someone",
            "Ima",
            "Person"
        );

        User secondUser = new User(
            "someone_else",
            "Someone",
            "Else"
        );

        Stream.of(firstUser, secondUser)
            .forEach(user -> {
                userRepository.save(user);
            });

        // Test get all Users
        when()
            .get("http://localhost:8080/users/")
            .then()
            .statusCode(is(200))
            .and().body(containsString("someone"))
            .and().body(containsString("Else"));

        // Test creating a User
        User userNotYetInDb = new User(
            "new_user",
            "Not",
            "Yet Created"
        );

        given()
            .contentType(JSON)
            .and().body(userNotYetInDb)
            .when()
            .post("http://localhost:8080/users")
            .then()
            .statusCode(is(200))
            .and().body(containsString("new_user"));

        // Test get all Users again
        when()
            .get("http://localhost:8080/users/")
            .then()
            .statusCode(is(200))
            .and().body(containsString("someone"))
            .and().body(containsString("Else"))
            .and().body(containsString("Yet Created"));

        // Test finding one user by ID
        when()
            .get("http://localhost:8080/users/" + secondUser.getId())
            .then()
            .statusCode(is(200))
            .and().body(containsString("Someone"))
            .and().body(containsString("Else"));

        // Test updating a user
        secondUser.setFirstName("changed_name");

        given()
            .contentType(JSON)
            .and().body(secondUser)
            .when()
            .patch("http://localhost:8080/users/" + secondUser.getId())
            .then()
            .statusCode(is(200))
            .and().body(containsString("changed_name"));

        // Test deleting a user
        when()
            .delete("http://localhost:8080/users/" + secondUser.getId())
            .then()
            .statusCode(is(200));
    }

    @Test
    public void shouldAllowFullCrudForFavorites() throws Exception {
        Favorite firstFav = new Favorite(1L, 12345L);
        Favorite secondFav = new Favorite(1L, 56789L);

        Stream.of(firstFav, secondFav)
            .forEach(fav -> {
                favoriteRepository.save(fav);
            });

        when()
                .get("http://localhost:8080/favorites/")
        .then()
                .statusCode((is(200)))
                .and().body(containsString("1"))
                .and().body(containsString("12345"));

        // Test creating a Favorite

        Favorite favoriteNotYetInDb = new Favorite(3L, 76543L);

        given()
            .contentType(JSON)
            .and().body(favoriteNotYetInDb)
            .when()
            .post("http://localhost:8080/users")
            .then()
            .statusCode(is(200))
            .and().body(containsString("76543"));

        // Test get all Favorites again
        when()
            .get("http://localhost:8080/users/")
            .then()
            .statusCode(is(200))
            .and().body(containsString("12345"))
            .and().body(containsString("56789"))
            .and().body(containsString("76543"));

        // Test deleting a Favorite
        when()
            .delete("http://localhost:8080/users/" + secondFav.getId())
            .then()
            .statusCode(is(200));
    }
}
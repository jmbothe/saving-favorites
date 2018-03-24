package com.example.nyccityrecord.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "FAVORITES")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "ITEM_ID")
    private Long itemId;

    public Favorite(Long userId, Long itemId) {
        this.userId = userId;
        this.itemId = itemId;
    }
}
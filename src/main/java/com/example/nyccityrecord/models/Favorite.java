package com.example.nyccityrecord.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "FAVORITES")
public class Favorite {

    @Column(name = "USER_ID")
    private Long userId;

    @Column(name = "ITEM_ID")
    private Long itemId;
}
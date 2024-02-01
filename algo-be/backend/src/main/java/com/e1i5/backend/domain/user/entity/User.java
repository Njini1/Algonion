package com.e1i5.backend.domain.user.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private int userId;

    @Column(name = "nickname", unique = false)
    private String nickname;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    private String tier;

    private int score;

    private LocalDate regDate;

    private boolean status; // 탈퇴 여부

    private LocalDate delDate;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profile_id")
    private ProfileFileInfo userProfile;

    //TODO 배경이미지 추가

    //    @Enumerated(value = EnumType.STRING)
//    private Platform flatform;
    @Builder
    public User(String nickname, String email, LocalDate regDate) {
        this.nickname = nickname;
        this.email = email;
        this.regDate = regDate;
    }

    public User update(String nickname) {
        this.nickname = nickname;
        return this;
    }

}

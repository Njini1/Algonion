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

    @Column(name = "tier")
    private String tier;

    @Column(name = "score")
    private int score;

    @Column(name = "reg_date")
    private LocalDate regDate;

    @Column(name = "status")
    private boolean status; // 탈퇴 여부

    @Column(name = "del_date")
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

    public void updateNickname(String nickname) {
        this.nickname = nickname;
    }

}

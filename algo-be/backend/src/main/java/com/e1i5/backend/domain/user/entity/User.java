package com.e1i5.backend.domain.user.entity;

import com.e1i5.backend.domain.problem.model.entity.SolvedProblem;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", updatable = false)
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

    @OneToMany(mappedBy = "user")
    private List<SolvedProblem> solvedProblems;

    @OneToOne(mappedBy = "user")
    private ProfileFileInfo userProfile;

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

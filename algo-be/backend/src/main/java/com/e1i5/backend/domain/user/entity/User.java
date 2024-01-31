package com.e1i5.backend.domain.user.entity;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;

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

//    @GeneratedValue(generator = "uuid2")
//    @GenericGenerator(name = "uuid2", strategy = "uuid2")
//    @Column(name = "user_uuid"/*, nullable = false*/, columnDefinition = "BINARY(16)")
//    private UUID userUuid;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "profile_id")
    private ProfileFileInfo userProfile;

//    @Enumerated(value = EnumType.STRING)
//    private Platform flatform;

//    @Column(length = 500)
//    private String refreshToken;

//    @Builder
//    public User(int userId, String nickname, String email, String refreshToken) {
//        this.userId = userId;
//        this.nickname = nickname;
//        this.email = email;
//        this.refreshToken = refreshToken;
//    }

    @Builder
    public User(String nickname, String email) {
        this.nickname = nickname;
        this.email = email;
    }

    public User update(String nickname) {
        this.nickname = nickname;
        return this;
    }
//
//    public User updateUuid(UUID uuid) {
//        this.userUuid = uuid;
//        return this;
//    }
}

package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.user.dto.response.Test;
import com.e1i5.backend.domain.user.dto.response.UserInfoResponse;
import com.e1i5.backend.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface AuthRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    boolean existsByNickname(String nickname);
//    Optional<User> findByNickname(String nickname);


    // u.tier AS tier, u.userId AS userId, u.score AS score, u.userProfile AS profileFileInfo, COUNT(sp) AS solvedProblemCnt
//    @Query("SELECT new com.e1i5.backend.domain.user.dto.response.UserInfoResponse(u.tier, u.userId, u.score, u.userProfile, COUNT(sp)) " +
//    @Query("SELECT u.tier AS tier, u.userId AS userId, u.score AS score, up.originalFile AS originalFile, up.saveFile AS saveFile, COUNT(sp) AS problemCount " +
//            "FROM User u " +
//            "LEFT JOIN u.userProfile up " +
//            "LEFT JOIN u.solvedProblems sp " +
//            "WHERE u.nickname = :nickname " +
//            "GROUP BY u.tier, u.userId, u.score, u.userProfile")
//    @Query("SELECT new com.e1i5.backend.domain.user.dto.response.UserInfoResponse(u.tier, u.userId, u.score, up, COUNT(sp)) " +
//            "FROM User u " +
//            "LEFT JOIN u.userProfile up " +
//            "LEFT JOIN u.solvedProblems sp " +
//            "WHERE u.nickname = :nickname " +
//            "GROUP BY u.tier, u.userId, u.score, up")
    @Query("SELECT new com.e1i5.backend.domain.user.dto.response.UserInfoResponse(u.tier, u.userId, u.userScore, up.originalFile, up.saveFile, COUNT(sp)) " +
            "FROM User u " +
            "LEFT JOIN u.userProfile up " +
            "LEFT JOIN u.solvedProblems sp " +
            "WHERE u.nickname = :nickname " +
            "GROUP BY u.tier, u.userId, u.userScore, up")
    Optional<UserInfoResponse> getUserByNickname(@Param("nickname") String nickname);
//    @Query("SELECT u.tier AS tier, u.userId AS userId, u.score AS score, up AS userProfile, COUNT(sp) AS problemCount " +
//            "FROM User u LEFT JOIN u.userProfile up LEFT JOIN u.solvedProblems sp " +
//            "WHERE u.nickname = :nickname " +
//            "GROUP BY u.tier, u.userId, u.score, up")
//    Optional<Test> getUserByNickname(@Param("nickname") String nickname);

}

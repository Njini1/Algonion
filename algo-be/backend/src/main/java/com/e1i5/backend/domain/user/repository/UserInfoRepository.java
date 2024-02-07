package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<User, Integer> {
    Optional<User> findByNickname(String nickname);
    Integer findUserScoreByUserId(int userId);
    @Modifying
    @Query("UPDATE User u SET u.userScore = :newScore WHERE u.userId = :userId")
    void updateUserScore(@Param("userId") int userId, @Param("newScore") int newScore);

}

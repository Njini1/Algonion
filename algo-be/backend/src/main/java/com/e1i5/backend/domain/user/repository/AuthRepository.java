package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.user.dto.response.FriendListInterfaceResponse;
import com.e1i5.backend.domain.user.dto.response.NicknameResponse;
import com.e1i5.backend.domain.user.dto.response.UserInfoResponse;
import com.e1i5.backend.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.List;

public interface AuthRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    boolean existsByNickname(String nickname);
    Optional<User> findByNickname(String nickname);
    Optional<NicknameResponse> findByUserId(int userId);

    @Query("SELECT new com.e1i5.backend.domain.user.dto.response.UserInfoResponse" +
            "(u.tier, u.userId, u.userScore, up.originalFile, up.saveFile, COUNT(sp)) " +
            "FROM User u " +
            "LEFT JOIN u.userProfile up " +
            "LEFT JOIN u.solvedProblems sp " +
            "WHERE u.nickname = :nickname " +
            "GROUP BY u.tier, u.userId, u.userScore, up")
    Optional<UserInfoResponse> getUserInfoByUserId(@Param("nickname") String nickname);

    List<FriendListInterfaceResponse> findByNicknameContaining(String nickname);

}

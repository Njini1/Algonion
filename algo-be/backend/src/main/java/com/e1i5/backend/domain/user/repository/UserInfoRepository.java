package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<User, Integer> {
    Optional<User> findByNickname(String nickname);
}

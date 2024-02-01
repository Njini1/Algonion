package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface AuthRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    boolean existsByNickname(String nickname);
}

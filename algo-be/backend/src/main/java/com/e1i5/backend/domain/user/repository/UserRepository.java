package com.e1i5.backend.domain.user.repository;

import com.e1i5.backend.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUserUuid(UUID uuid);
    Optional<User> findByRefreshToken(String refreshToken);
}

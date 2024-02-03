package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.entity.User;
import jakarta.servlet.http.HttpServletRequest;

import java.util.Optional;
import java.util.UUID;

public interface AuthService {
    User findByEmail(String email);
    User findById(int userId);
    String createNewAccessToken(String refreshToken);
    boolean duplicateCheckNickname(String nickname);
    String generateRandomNickname();
    String changeNickname(String nickname, int userId);
}

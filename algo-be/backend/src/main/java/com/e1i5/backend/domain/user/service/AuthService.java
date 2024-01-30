package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.entity.User;

import java.util.UUID;

public interface AuthService {
    User findById(UUID userId);
    User findByEmail(String email);
    String createNewAccessToken(String refreshToken);
    void saveUserProfile(String originalFileName, String saveFileName); //TODO 사용자 컨트롤러로 이동
}

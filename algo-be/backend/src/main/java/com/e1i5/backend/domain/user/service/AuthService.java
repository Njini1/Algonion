package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.entity.User;

import java.util.UUID;

public interface AuthService {
    User findByEmail(String email);
    String createNewAccessToken(String refreshToken);
}

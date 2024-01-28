package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.entity.User;
import com.e1i5.backend.domain.user.repository.UserRepository;
import com.e1i5.backend.global.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final TokenProvider tokenProvider;


    public User findById(UUID userId) {
        return userRepository.findByUserUuid(userId)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));
    }

    public String createNewAccessToken(String refreshToken) {
        // 토큰 유효성 검사에 실패하면 예외 발생
        if(!tokenProvider.validateToken(refreshToken).isValid()) { // 받은 토큰을 가지고 비밀키로 복호화해서 유효성 확인
            throw new IllegalArgumentException("Unexpected token");
        }

        // db의 리프레시 토큰값과도 같은 지도 확인
        User user = userRepository.findByRefreshToken(refreshToken).orElseThrow(() -> new AccessDeniedException("refresh token으로 사용자를 찾을 수 없음"));
        return tokenProvider.createAccessToken(user);
    }
}

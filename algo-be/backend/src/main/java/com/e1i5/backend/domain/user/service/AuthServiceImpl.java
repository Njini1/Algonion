package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.entity.ProfileFileInfo;
import com.e1i5.backend.domain.user.entity.User;
import com.e1i5.backend.domain.user.repository.UserProfileRepository;
import com.e1i5.backend.domain.user.repository.AuthRepository;
import com.e1i5.backend.global.jwt.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@RequiredArgsConstructor
@Service
public class AuthServiceImpl implements AuthService{

    @Autowired
    private final AuthRepository authRepo;
    @Autowired
    private final TokenProvider tokenProvider;


    public User findByEmail(String email) {
        return authRepo.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));
    }

    public String createNewAccessToken(String refreshToken) {
        // 토큰 유효성 검사에 실패하면 예외 발생
        if(!tokenProvider.validateToken(refreshToken).isValid()) { // 받은 토큰을 가지고 비밀키로 복호화해서 유효성 확인
            throw new IllegalArgumentException("Unexpected token");
        }

        System.out.println("토큰 만료 재발급");
        return tokenProvider.createNewAccessToken(refreshToken);
//        return tokenProvider.createAccessToken(user);
    }

}

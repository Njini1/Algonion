package com.e1i5.backend.domain.user.service;

import com.e1i5.backend.domain.user.entity.User;
import com.e1i5.backend.domain.user.exception.AccessDeniedException;
import com.e1i5.backend.domain.user.repository.AuthRepository;
import com.e1i5.backend.global.error.GlobalErrorCode;
import com.e1i5.backend.global.jwt.TokenProvider;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
@Slf4j
public class AuthServiceImpl implements AuthService{

    @Autowired
    private final AuthRepository authRepo;
    @Autowired
    private final TokenProvider tokenProvider;

    private final static String HEADER_AUTHORIZATION = "Authorization";
    private final static String TOKEN_PREFIX = "Bearer ";


    public User findByEmail(String email) {
        return authRepo.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Unexpected user"));
    }

    public String createNewAccessToken(String refreshToken/*, HttpServletRequest httpServletRequest*/) {
        // 토큰 유효성 검사에 실패하면 예외 발생
//        System.out.println("createNewAccessToken token 에러값" + tokenProvider.validateToken(refreshToken).getErrMsg());
//        if(!tokenProvider.validateToken(refreshToken)) { // 받은 토큰을 가지고 비밀키로 복호화해서 유효성 확인
//            throw new IllegalArgumentException("Unexpected token");
//        }

        // 1. refresh token 유효성 검사
//        try {
//            tokenProvider.getClaims(refreshToken);
//        } catch (ExpiredJwtException e) {
//            System.out.println("리프레시 토큰 만료");
//            log.error("invalid refresh token", e);
//            throw new AccessDeniedException(GlobalErrorCode.TOKEN_EXPIRED);
////            throw new ExpiredJwtException(null, null, "refresh token has expired");
//        } catch (Exception e) {
//            System.out.println("리프레시 토큰 오류");
//            log.error("invalid refresh token", e);
//            throw new AccessDeniedException(GlobalErrorCode.ACCESS_DENIED);
////            throw new IllegalArgumentException("createNewAccessToken Unexpected refresh token");
//        }
//        // 2. access token 만료된 토큰 검사
//        String authorizationHeader = httpServletRequest.getHeader(HEADER_AUTHORIZATION);
//        String accessToken = getAccessToken(authorizationHeader);
//        try {
//            tokenProvider.getClaims(accessToken);
//            // ExpiredJwtException 예외가 catch되지 않았을 때 IllegalArgumentException
//            throw new AccessDeniedException(GlobalErrorCode.ACCESS_DENIED);
//        } catch (ExpiredJwtException e) {
//            System.out.println("토큰 만료 재발급");
//            return tokenProvider.createNewAccessToken(refreshToken);
//        }
        try {
            tokenProvider.getClaims(refreshToken);
            // ExpiredJwtException 예외가 catch되지 않았을 때 AccessDeniedException
            return tokenProvider.createNewAccessToken(refreshToken);
        } catch (ExpiredJwtException e) {
            System.out.println("refresh token 재발급 오류" + e.getMessage());
            throw new AccessDeniedException(GlobalErrorCode.ACCESS_DENIED);
        }


//        return tokenProvider.createAccessToken(user);
    }

    /**
     * 닉네임 중복 검사
     * @param nickname 검사할 닉네임
     * @return true 사용 가능한 닉네임, false 이미 존재하는 닉네임
     */
    @Override
    public boolean duplicateCheckNickname(String nickname) {
        return !authRepo.existsByNickname(nickname);
    }

    private String getAccessToken(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith(TOKEN_PREFIX)) {
            return authorizationHeader.substring(TOKEN_PREFIX.length());
        }
        return null;
    }

}

package com.e1i5.backend.global.jwt;

import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

/**
 * 인증 정보 설정
 * : 요정 헤더에서 키가 'Authorization'인 필드의 값을 가져온 다음, 토큰의 접두사 'Bearer'을 제외한 값을 얻는다.
 * 만약 값이 null이거나 Bearer로 시작하지 않으면 null을 반환한다.
 * 이어서 가져온 토큰이 유효한지 확인하고 유효하다면 인증 정보를 관리하는 시큐리티 컨텍스트에 인증 정보를 설정한다.
 */

@Slf4j
@RequiredArgsConstructor
public class TokenAuthenticationFilter extends OncePerRequestFilter {
    private final TokenProvider tokenProvider;

    private final static String HEADER_AUTHORIZATION = "Authorization";
    private final static String TOKEN_PREFIX = "Bearer ";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        log.info("토큰 인증 필터 구간");
        // 요청 헤더의 Authorization 키의 값 조회
        // 방법 1
//        String token = getAccessToken(request);

        // 방법 2
        String authorizationHeader = request.getHeader(HEADER_AUTHORIZATION);
        String token = getAccessToken(authorizationHeader);


        // 가져온 토큰이 유효한지 확인하고, 유효한 때는 인증 정보 설정
//        TokenValidResultResponse tokenValidResultResponse = tokenProvider.validateToken(token);
//        if (tokenProvider.validateToken(token)) {
//            Authentication authentication = tokenProvider.getAuthentication(token);
//            SecurityContextHolder.getContext().setAuthentication(authentication); // 인증 정보 설정
//            System.out.println("인증 정보 설정 : " + authentication.getName());
//        } else {
//            log.error(tokenValidResultResponse.getErrMsg());
//            // SecurityConfig에서 addFilterAfter 코드를 http.addFilterAfter(tokenAuthenticationFilter(), BasicAuthenticationFilter.class);로 바꾸면 사용가능
////            response.sendError(tokenValidResultResponse.getStatusCode(), tokenValidResultResponse.getErrMsg());
////            return;
//        }
        Claims claims;
        try {
            claims = tokenProvider.getClaims(token);
        } /*catch (ExpiredJwtException e) {
            log.error("expired access token", e);
            response.sendError(401, "토큰 만료");
//            request.setAttribute("exception", GlobalErrorCode.TOKEN_EXPIRED);
            filterChain.doFilter(request, response);
            return;

        }*/ catch (Exception e) {
            log.info("jwt exception message : {} token : {}", e.getMessage(), token);
            filterChain.doFilter(request, response);
            return;
        }

        Authentication authentication = tokenProvider.getAuthentication(token);
        SecurityContextHolder.getContext().setAuthentication(authentication); // 인증 정보 설정
        filterChain.doFilter(request, response);
    }

    /**
     * 헤더로부터 token 받아오는 메서드
     * @param
     * @return 토큰값
     */

    private String getAccessToken(String authorizationHeader) {
        if (authorizationHeader != null && authorizationHeader.startsWith(TOKEN_PREFIX)) {
            return authorizationHeader.substring(TOKEN_PREFIX.length());
        }
        return null;
    }
}
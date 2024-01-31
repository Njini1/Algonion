package com.e1i5.backend.domain.user.controller;

import com.e1i5.backend.domain.user.dto.request.CreateAccessTokenRequest;
import com.e1i5.backend.domain.user.dto.response.CreateAccessTokenResponse;
import com.e1i5.backend.domain.user.service.AuthService;
import com.e1i5.backend.global.util.CookieUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/user")
@Slf4j
public class AuthController {

    @Autowired
    private AuthService authService;

//    @PostMapping("/token")
//    public ResponseEntity<CreateAccessTokenResponse> createNewAccessToken(@RequestBody CreateAccessTokenRequest request) {
////        String newAccessToken = tokenService.createNewAccessToken(request.getRefreshToken());
//        String newAccessToken = authService.createNewAccessToken(request.getRefreshToken());
//
//        return ResponseEntity.status(HttpStatus.CREATED)
//                .body(new CreateAccessTokenResponse(newAccessToken));
//
//    }
    @PostMapping("/token")
    public ResponseEntity<CreateAccessTokenResponse> createNewAccessToken(HttpServletRequest httpServletRequest) {
        // 1. 쿠키에서 refresh token 가져오기
        String refreshToken = CookieUtil.findCookie(httpServletRequest, "refresh_token");

        // 2. refresh token을 사용하여 새로운 access token 생성 또는 기능 수행
        String newAccessToken = authService.createNewAccessToken(refreshToken, httpServletRequest);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new CreateAccessTokenResponse(newAccessToken));
    }

    @GetMapping("/login-test")
    public ResponseEntity<String> loginTest() {
        System.out.println("login test입니당");
        return new ResponseEntity<String>("test", HttpStatus.OK);
    };

    private ResponseEntity<String> exceptionHandling(Exception e) {
        e.printStackTrace();
        return new ResponseEntity<String>("Error : " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

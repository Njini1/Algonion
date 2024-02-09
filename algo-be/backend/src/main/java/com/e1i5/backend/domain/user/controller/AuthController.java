package com.e1i5.backend.domain.user.controller;

import com.e1i5.backend.domain.user.dto.request.NicknameRequest;
import com.e1i5.backend.domain.user.dto.response.CreateAccessTokenResponse;
import com.e1i5.backend.domain.user.exception.UserNotFoundException;
import com.e1i5.backend.domain.user.service.AuthService;
import com.e1i5.backend.global.util.CookieUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/v1/user")
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
        String newAccessToken = authService.createNewAccessToken(refreshToken);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new CreateAccessTokenResponse(newAccessToken));
    }

    @GetMapping("/nickname")
    public ResponseEntity<Boolean> checkNickname(@RequestBody NicknameRequest nicknameReq) {
        //TODO @Valid 유효성 검사 추가
        boolean checkResult = authService.duplicateCheckNickname(nicknameReq.getNickname());
        return new ResponseEntity<>(checkResult, HttpStatus.OK);
    }

    @PutMapping("/nickname")
    public ResponseEntity<String> changeNickname(@RequestBody NicknameRequest nicknameReq) {
        //TODO @Valid 유효성 검사 추가
        String changeNickname = authService.changeNickname(nicknameReq.getNickname(), 2);
        return new ResponseEntity<>(changeNickname, HttpStatus.OK);
    }


    @GetMapping("/login-test")
    public ResponseEntity<String> loginTest() {
        System.out.println("login test입니당");
        return new ResponseEntity<String>("test", HttpStatus.OK);
    }


    private ResponseEntity<String> exceptionHandling(Exception e) {
        e.printStackTrace();
        return new ResponseEntity<String>("Error : " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @GetMapping("/withdraw")
    public ResponseEntity<String> withdrawUser() {
        try {
            int userId = 1;
            authService.withdrawUser(userId);
            return ResponseEntity.ok().build();
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

}

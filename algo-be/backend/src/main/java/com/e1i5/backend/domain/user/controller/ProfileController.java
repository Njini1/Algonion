package com.e1i5.backend.domain.user.controller;


import com.e1i5.backend.domain.user.dto.response.ExtUserInfoResponse;
import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import com.e1i5.backend.domain.user.dto.response.UserInfoResponse;
import com.e1i5.backend.domain.user.entity.User;
import com.e1i5.backend.domain.user.service.AuthService;
import com.e1i5.backend.domain.user.service.ProfileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/profile")
@Slf4j
public class ProfileController {

    @Autowired
    private ProfileService profileService; //TODO 이 방식 또는 RequiredArguments 방식으로 통일
    @Autowired
    private AuthService authService;

    @PostMapping("/profile-img")
    public ResponseEntity<Void> saveUserProfile(MultipartFile profileImg, Principal principal) {
        int userId = Integer.parseInt(principal.getName());
        profileService.saveUserProfile(userId, profileImg);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * 1년치 스트릭 만드는 메서드
     * @param username
     * @return 날짜와 그 날짜에 푼 문제 개수 리스트 반환
     */
    @GetMapping("/streak")
    public ResponseEntity<List<StreakResponseInterface>> getAllStreak(@RequestParam("username") String username) {
//        List<StreakResponseInterface> streakResponses = profileService.getUserSevenStreak(2);
//        return new ResponseEntity<>(streakResponses, HttpStatus.OK);
        return null;
    }

    /**
     * 7일 스트릭 만드는 메서드(확장 프로그램 ver)
     * @return
     */
    @GetMapping("/ext")
    public ResponseEntity<ExtUserInfoResponse> getExtUserInfo(Principal principal) { //TODO access token 확인으로 변경
        int userId = Integer.parseInt(principal.getName());
       Map<String, Long> streakResponses = profileService.getUserSevenStreak(userId); //TODO 서비스 단 변경
        User user = authService.findById(userId);
        ExtUserInfoResponse userInfo = ExtUserInfoResponse.builder().tier(user.getTier()).nickname(user.getNickname()).streak(streakResponses).build();
        return new ResponseEntity<>(userInfo, HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<UserInfoResponse> getUserInfo(@Param("nickname") String nickname) {
        UserInfoResponse user = profileService.getUserInfo(nickname);
        System.out.println("controller user: " + user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}

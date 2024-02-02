package com.e1i5.backend.domain.user.controller;


import com.e1i5.backend.domain.user.dto.response.StreakResponseInterface;
import com.e1i5.backend.domain.user.service.ProfileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/profile")
@Slf4j
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping("/profile-img")
    public ResponseEntity<Void> saveUserProfile(MultipartFile profileImg) {
        profileService.saveUserProfile(profileImg);
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
    public ResponseEntity<?> getExtUserInfo() {
       Map<String, Long> streakResponses = profileService.getUserSevenStreak(2);
//        String streakResponses = "{\n" +
//                "    \"2024-01-27\": 5,\n" +
//                "    \"2024-01-28\": 5,\n" +
//                "    \"2024-01-29\": 4,\n" +
//                "    \"2024-01-30\": 3,\n" +
//                "    \"2024-01-31\": 2,\n" +
//                "    \"2024-02-01\": 1,\n" +
//                "    \"2024-02-02\": 0\n" +
//                "}";
        return new ResponseEntity<>(streakResponses, HttpStatus.OK);
    }
}

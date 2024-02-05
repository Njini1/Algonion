package com.e1i5.backend.domain.user.controller;


import com.e1i5.backend.domain.problem.response.ProblemResponse;
import com.e1i5.backend.domain.user.dto.response.ExtUserInfoResponse;
import com.e1i5.backend.domain.user.dto.response.UserInfoInterface;
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
@RequestMapping("/v1/profile")
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
    public ResponseEntity<Map<String, Long>> getAllStreak(
            @RequestParam("username") String username,
            @RequestParam("from") String startDate,
            @RequestParam("to") String endDate) {

        Map<String, Long> streakResponses = profileService.makeStreak(username, startDate, endDate);

        return new ResponseEntity<>(streakResponses, HttpStatus.OK);
    }

    /**
     * 7일 스트릭 만드는 메서드(확장 프로그램 ver)
     * @return
     */
    @GetMapping("/ext")
    public ResponseEntity<ExtUserInfoResponse> getExtUserInfo(Principal principal) {

        int userId = Integer.parseInt(principal.getName());

        Map<String, Long> streakResponses = profileService.getUserSevenStreak(userId); //TODO 서비스 단으로 변경

        User user = authService.findById(userId);
        ExtUserInfoResponse userInfo = ExtUserInfoResponse.builder()
                .tier(user.getTier())
                .nickname(user.getNickname())
                .streak(streakResponses).build();

        return new ResponseEntity<>(userInfo, HttpStatus.OK);
    }

    /**
     * 사용자 정보 불러오기 
     * @param nickname 사용자 닉네임
     * @return 사용자 아이디, 티어, 점수, 프로필 이미지
     */
    @GetMapping()
    public ResponseEntity<UserInfoResponse> getUserInfo(@Param("nickname") String nickname) {
        //TODO 배경 이미지 추가
        UserInfoResponse user = profileService.getUserInfo(nickname);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/recommand")
    public ResponseEntity<?> recommandLevelProblem() {

        List<ProblemResponse> problemResponses = profileService.recommandProblem(1);

        return new ResponseEntity<>(problemResponses, HttpStatus.OK);
    }
}

package com.e1i5.backend.domain.user.controller;


import com.e1i5.backend.domain.user.service.DashboardService;
import com.e1i5.backend.domain.problem.model.entity.Problem;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/dashboard")
@Slf4j
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    /**
     * 사용자 푼 문제 목록 가져오기
     * top100, 점수계산, 난이도별 원형 그래프에 사용
     * @param nickname
     * @return 특정 유저가 푼 문제 목록 반환
     */
    @GetMapping("/solved-problem-list")
    public ResponseEntity<List<Problem>> getProblemsByNickname(@RequestParam("nickname") String nickname) {
        List<Problem> solvedProblems = dashboardService.getProblemsByNickname(nickname);
        return new ResponseEntity<>(solvedProblems, HttpStatus.OK);
    }


    /**
     * 난이도 기준 top100 문제 가져오기
     * @return 난이도 상위 100문제 리스트 반환
     */
//    @GetMapping("/rating/top100")
//    public ResponseEntity<List<Problem>> getTop100ProblemsByNickname(@RequestParam("nickname") String nickname) {
//        List<Problem> top100Problems = dashboardService.getTop100ProblemsByNickname(nickname);
//        return new ResponseEntity<>(top100Problems, HttpStatus.OK);
//    }
}

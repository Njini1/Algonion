package com.e1i5.backend.domain.user.controller;

import com.e1i5.backend.domain.user.dto.response.DashBoardProblemListResponse;
import com.e1i5.backend.domain.user.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    /**
     * 난이도 기준 top100 문제 가져오기
     * @param nickname
     * @return 난이도 상위 100문제 리스트 반환
     */
    @GetMapping("/rating/top100")
    public ResponseEntity<List<DashBoardProblemListResponse>> getProblemsByNickname(@RequestParam("nickname") String nickname) {
        List<DashBoardProblemListResponse> problemsList = dashboardService.getProblemsByNickname(nickname);
        return new ResponseEntity<>(problemsList, HttpStatus.OK);
    }
}

